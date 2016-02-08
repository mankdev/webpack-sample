var path = require('path');

module.exports = {
	entry: {
		'dist/main': path.join(__dirname, 'src', 'main.js')
	},
	output: {
		filename: '[name].js'
	}
};