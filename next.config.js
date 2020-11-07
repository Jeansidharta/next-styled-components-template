module.exports = {
	exportPathMap: async function (
		defaultPathMap,
		{ dev, dir, outDir, distDir, buildId }
	) {
		return {
		...defaultPathMap,
		// Add your reroutes here. Example:
		// Reroutes the '/' path to '/home'
		// '/': { page: '/home' },
		}
	},
}