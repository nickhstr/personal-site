const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

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
			'app/shared/components',
			'app/pages/home/components',
			'app/pages/about/components',
			'app/pages/projects/components',
			'app/pages/blog/components'
		],
		alias: {
			sharedStyles: 'app/shared/main.scss',
			homeStyles: 'app/pages/home/main.scss',
			aboutStyles: 'app/pages/about/main.scss',
			projectsStyles: 'app/pages/projects/main.scss',
			blogStyles: 'app/pages/blog/main.scss',
		},
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
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'postcss', 'sass']
			}
		]
	},
	postcss: [
		autoprefixer({browsers: ['last 2 versions']})
	],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	]
};