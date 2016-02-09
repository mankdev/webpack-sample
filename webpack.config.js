var path = require('path');

module.exports = {
	entry: {
		'dist/main': path.join(__dirname, 'src', 'main.js')
	},
	output: {
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?presets[]=es2015'
			},
			{
				test: /\.styl$/,
				loader: 'style!css!stylus'
			}
		]
	}
};