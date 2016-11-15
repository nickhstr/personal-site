// Promise support for IE 10+
require('babel-polyfill');

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

var entryDir = './app/pages/';

module.exports = {
	entry: {
		home: ['babel-polyfill', entryDir + 'home/home.jsx'],
		about: ['babel-polyfill', entryDir + 'about/about.jsx'],
		projects: ['babel-polyfill', entryDir + 'projects/projects.jsx'],
		blog: ['babel-polyfill', entryDir + 'blog/blog.jsx']
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].js',
		publicPath: '/public/'
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
			MyAPI: 'app/api/MyAPI.jsx',
			actions: 'app/redux/actions.jsx',
			reducers: 'app/redux/reducers.jsx',
			configureStore: 'app/redux/configureStore.jsx',
		},
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				babelrc: false,
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					cacheDirectory: true
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