var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: ['app/shared/tests/**/*.test.jsx', 'app/pages/home/tests/**/*.test.jsx'],
		preprocessors: {
			'app/shared/tests/**/*.test.jsx': ['webpack'],
			'app/pages/home/tests/**/*.test.jsx': ['webpack']
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				timeout: '5000'
			}
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
}