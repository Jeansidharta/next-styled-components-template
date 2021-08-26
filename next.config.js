const ImageminWebpWebpackPlugin = require(`imagemin-webp-webpack-plugin`);

module.exports = {
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
		config.module.rules.push({
			test: /\.(png|jpe?g)$/i,
			use: [
				{
					// Allows for png and jpeg resizing
					loader: `webpack-image-resize-loader`,
				},
			],
		});

		// Minifies images and create webp alternative for jpeg, png and gifs
		config.plugins.push(new ImageminWebpWebpackPlugin());
		return config;
	},
};
