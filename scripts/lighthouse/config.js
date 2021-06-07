module.exports = {
	// What branch names should trigger the lighthouse checking.
	TRIGGERING_BRANCH_NAME: ['main', 'master'],

	// This is the port your website will be temporarily served in order to run the
	// lighthouse program.
	APP_PORT_SERVE: 9090,

	// This is the npm script that will build your page.
	NPM_BUILD_SCRIPT: 'build-export',

	// This the is folder in which your built page will reside.
	// This path is relative to your project root.
	BUILD_OUT_FOLDER: 'out',

	// These are the lighthouse requirements for the script to succeed.
	// You can comment any of these to disable it's checking.
	LIGHTHOUSE_REQUIREMENTS: {
		'performance': 0.9,
		'accessibility': 1,
		'best-practices': 1,
		'seo': 1,
		// 'pwa': 0,
	},

	// Here you can specify some audits to skip. This is useful if there are any
	// audits that you're not willing to comply with, or that won't ever pass
	// in a development environment, but should pass in the production env.
	// This option accepts the ID of the audits, and not their names or titles.
	// The ID of an audit can be seen in the console, whenever an audit fails.
	// The IDs of the audits can also be seen in the lighthouse-report.json, which
	// is generated if the option SHOULD_GENERATE_REPORT_FILE is set to true.
	// For more information, see this link:
	// https://github.com/GoogleChrome/lighthouse/blob/HEAD/docs/configuration.md#options
	SKIPPED_AUDITS: [
		// The canonical URL will almost never be valid in a testing environment.
		'canonical',

		// I can't do much about this one. If the colors have low contrast, it's the
		// designer's fault, not mine. I can't change the colors the designer sent me.
		// Therefore, I think it's unnecessary to use this audit.
		'color-contrast',
	],

	// If true, the lighthouse report file will be generated. This would probably
	// be done if you want more info, or if you are debugging something.
	SHOULD_GENERATE_REPORT_FILE: false,

	// The location of the SSL cert used to setup https.
	// This path is relative to your project root.
	SSL_CERT_LOCATION: 'scripts/lighthouse/localhost.cert',

	// The location of the SSL key used to setup https.
	// This path is relative to your project root.
	SSL_KEY_LOCATION: 'scripts/lighthouse/localhost.key',
};