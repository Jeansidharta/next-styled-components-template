const ImageminWebpWebpackPlugin = require(`imagemin-webp-webpack-plugin`);

module.exports = {
	future: {
		webpack5: true,
	},
	async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			...defaultPathMap,
			// Add your reroutes here. Example:
			// Reroutes the '/' path to '/home'
			// '/': { page: '/home' },
		};
	},

	// Custom webpack configurations
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.module.rules.push(
			{
				// Change this regex if you want another type of file to be interpred by webpack
				test: /\.(png|jpe?g|gif|svg)$/i,
				use: [
					{
						// Allows for any kind of file to be imported through webpack
						loader: `file-loader`,
						options: {
							publicPath: `/_next/static/images/`,
							outputPath: `${isServer ? `../` : ``}static/images/`,
							name: `[name]-[hash].[ext]`,
							esModule: false,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g)$/i,
				use: [
					{
						// Allows for png and jpeg resizing
						loader: `webpack-image-resize-loader`,
					},
				],
			},
		);

		// Minifies images and create webp alternative for jpeg, png and gifs
		config.plugins.push(new ImageminWebpWebpackPlugin());
		return config;
	},
};
