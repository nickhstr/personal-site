const webpack = require('webpack');
const path = require('path');
var entryDir = './app/pages/';

module.exports = {
	entry: {
		home: entryDir + 'home/home.jsx',
		about: entryDir + 'about/about.jsx',
		projects: entryDir + 'projects/projects.jsx',
		blog: entryDir + 'blog/blog.jsx'
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js'
	},
	resolve: {
		root: __dirname,
		modulesDirectories: [
			'node_modules',
			'app/components',
			'app/pages/home/components',
			'app/pages/about/components',
			'app/pages/projects/components',
			'app/pages/blog/components'
		],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exlude: /(node_modules|bower_components)/
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};