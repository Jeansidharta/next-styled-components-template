const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
		...defaultPathMap,
		// Reroutes the '/' path to '/home'
		'/': { page: '/home' },
		}
	},

	// Custom webpack configurations
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push({
			// Change this regex if you want another type of file to be interpred by webpack
			test: /\.(png|jpe?g|gif|svg)$/i,
			use: [
				{
					// Allows for any kind of file to be imported through webpack
					loader: 'file-loader',
					options: {
						publicPath: `/_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
						esModule: false,
					}
				},
			],
		});

		// Minifies images and create webp alternative for jpeg, png and gifs
		config.plugins.push(new ImageminWebpWebpackPlugin());
		return config;
	},
}