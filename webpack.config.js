var path = require('path');

module.exports = {
	entry: {
		'main': path.join(__dirname, 'src', 'main.js')
	},
	output: {
		filename: '[name].js',
		publicPath: '',
		path: path.resolve('./dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?presets[]=es2015',
				exclude: [path.resolve('./config')]
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus'
			},
			{
				test: /\.config\.js$/,
				loader: path.resolve('./utils/json-extractor.js')
			}
		]
	}
};