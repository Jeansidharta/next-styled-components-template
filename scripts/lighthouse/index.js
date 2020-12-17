/******************************************************************************/
/*                         WHAT IS THIS FILE??                                */
/*                                                                            */
/* This is a script that will try to check if your website has a good         */
/* lighthouse score. If it does have a good enough score, the process will    */
/* exit with zero (success). Otherwise, the process will print what should be */
/* done to improve the score, and will exit with -1 (failed).                 */
/*                                                                            */
/* This script is supposed to be used as a git hook, more specifically as a   */
/* pre-push hook. Therefore, this script expects a total of 6 arguments, where*/
/* 4 of them are git-related.                                                 */
/*                                                                            */
/* If you're wondering where this script is called, check the package.json.   */
/* There should be a "husky" entry, which has a "pre-push" script. This is it.*/
/*                                                                            */
/* Also, this script will only run the lighthouse checking if you're pushing  */
/* the Master branch (or at least it should be, if I didn't write any bugs).  */
/*                                                                            */
/* This script requires the following packages to run:                        */
/*    - lighthouse (duh): https://www.npmjs.com/package/lighthouse            */
/*    - serve-handler: https://github.com/vercel/serve-handler                */
/*                                                                            */
/* Also, this script assumes to be run with the Current Working Directory     */
/* set as your project's root. This is because this script will run some npm  */
/* scripts.                                                                   */
/*                                                                            */
/******************************************************************************/

// If you wan't to store the config somewhere else, you can change this value.
// The config location must be relative to this file.
const CONFIG_LOCATION = './config.js';

const { spawnSync } = require('child_process');
const fs = require('fs');
const handler = require('serve-handler');
const http2 = require('http2');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const argv = process.argv;

if (argv.length !== 6){
	console.log('Incorrect number of aruments provided to lighthouse script.');
	process.exit(-1);
}

const [
	_nodeExecArg, // This first arg should be ignored
	_lighthouseScriptPath, // this second argument should be ignored.
	// Args received from GIT. Only localRef and remoteRef will be used.
	localRef, _localSha1, remoteRef, _remoteSha1
] = argv;

// Don't lighthouse check if it's not a master push. Lighthouse checking is expensive.
if (!remoteRef.endsWith('master') && !localRef.endsWith('master')) {
	console.log('Not pushing to master. Skipping lighthouse checks...');
	process.exit(0);
}

// Alright, we now know its a push to master.
console.log('pushing to master, executing lighthouse...');

// Load the config variables. For more explanation about them, go to the actual
// config file. There should be enough comments there.
const {
	APP_PORT_SERVE,
	NPM_BUILD_SCRIPT,
	BUILD_OUT_FOLDER,
	LIGHTHOUSE_REQUIREMENTS,
	SSL_CERT_LOCATION,
	SSL_KEY_LOCATION,
	SHOULD_GENERATE_REPORT_FILE,
	SKIPPED_AUDITS,
} = require(CONFIG_LOCATION);

/** Makes sure we are looking at the latest version of the app. */
function buildAndExportApp () {
	const { status } = spawnSync('npm', ['run', NPM_BUILD_SCRIPT], { shell: true, stdio: 'inherit' });

	if (status !== 0) {
		throw new Error('An error occurred in the building step.');
	}
}

/**
 * Serves the app with the "serve" npm package. This is so the lighthouse has a
 * "server" to fetch our page from.
 */
async function serveApp () {
	return new Promise(resolve => {
		// Start an HTTP2 server.
		const server = http2.createSecureServer({
			allowHTTP1: true,
			cert: fs.readFileSync(SSL_CERT_LOCATION),
			key: fs.readFileSync(SSL_KEY_LOCATION),
		}, (request, response) => {
			return handler(request, response, { public: BUILD_OUT_FOLDER });
		});

		server.listen(APP_PORT_SERVE, () => {
			console.log(`App being served on port ${APP_PORT_SERVE}, from folder ${BUILD_OUT_FOLDER}`);
			resolve(); // When the server is ready, continue with the lighthouse process.
		});
	});
}

/**
 * Actually runs the Lighthouse npm package.
 */
async function runLighthouse () {
	const chrome = await chromeLauncher.launch({chromeFlags: ['--headless', '--ignore-certificate-errors']});
	console.log(`ignoring the following audits: '${SKIPPED_AUDITS.join(`', '`)}'`);
	const runnerResult = await lighthouse('https://localhost:' + APP_PORT_SERVE, {
		logLevel: '',
		output: 'json',
		onlyCategories: Object.keys(LIGHTHOUSE_REQUIREMENTS),
		port: chrome.port,
		skipAudits: SKIPPED_AUDITS,
	});

	if (SHOULD_GENERATE_REPORT_FILE)
		fs.writeFileSync('lighthouse-report.json', runnerResult.report);

	await chrome.kill();
	return JSON.parse(runnerResult.report);
}

/** Checks the lighthouse's score of each valid category.
 *
 * Please note that this type object is by no means complete. It only has the
 * necessary info to run this script. This is just so you (the maintainer) have
 * a better understanding of what is going on here.
 *
 * @argument {{
 * 	categories: {
 * 		[categoryName: string]: {
 * 			score: number,
 * 			auditRefs: { id: string }[]
 * 		}
 * 	}
 * 	audits: {
 * 		[auditId: string]: {
 * 			score: number,
 * 			title: string,
 * 			id: string,
 * 		}
 * 	}
 * }} lighthouseReport
 */
function checkLighthouseReport (lighthouseReport) {
	function handleLighthouseScore (scoreName) {
		const scoreObject = lighthouseReport.categories[scoreName];
		const { score } = scoreObject;
		const scoreTarget = LIGHTHOUSE_REQUIREMENTS[scoreName];
		if (score < scoreTarget) {
			console.log(`Category '${scoreName}' scored ${score}, needed ${scoreTarget}. FAILED`);
			scoreObject.auditRefs.forEach(auditRef => {
				const audit = lighthouseReport.audits[auditRef.id]
				if (audit.score !== null && audit.score !== 1) {
					console.log(`\tAudit id "${audit.id}" score ${audit.score}: ${audit.title}`);
				}
			});
			return false;
		} else {
			console.log(`Category '${scoreName}' scored ${score}, needed ${scoreTarget}. PASSED`);
			return true;
		}
	}

	const anyProblemFound = Object
		.keys(LIGHTHOUSE_REQUIREMENTS) // Get all requirements to be checked.
		.map(handleLighthouseScore) // Check for problems on all requirements.
		.some(success => !success); // Checks if any requirement had a problem.

	if (anyProblemFound) {
		throw new Error('LIGHTHOUSE FAILED');
	}

	console.log('LIGHTHOUSE SUCCESSFUL');
}

// MAIN FUNCTION
(async () => {
	console.log('building app...');
	buildAndExportApp();
	console.log('Serving app...');
	await serveApp();
	console.log('Running Lighthouse...');
	const report = await runLighthouse();
	console.log('Verifying Lighthouse report...');
	checkLighthouseReport(report);
	console.log('Everything ran successfuly.');
	process.exit(0);
})().catch(e => {
	console.log(e.message); // Logs the error message.
	process.exit(-1);
});