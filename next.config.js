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
}