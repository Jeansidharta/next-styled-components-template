// This is a config file for the process manager `pm2`. If you are not using `pm2`,
// You can delete this file. For more information about this file, see this link:
// https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
	apps: [
		{
			// TODO - add application name here
			name: 'YOU-APP-NAME-HERE',

			// The serve script will simply serve the contents of the folder specified in the.
			// arguments
			script: 'serve',

			// Serves the `out` folder, which is where the site will be staticaly generated.
			// This folder will be generated when you run `npm run build-export`.
			args: 'out/',

			// If `watch` is true, a file watcher will be attached to the whole project.
			// Whenever any file in the project is changed, `pm2` will reload this process.
			watch: false,

			// Adds timestamp for logs
			time: true,
		},
	],
};
