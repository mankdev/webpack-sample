var path = require('path');

module.exports = function(source) {
	var result = this.exec(source, this.resourcePath);
	var destName = path.basename(this.resourcePath, '.js') + '.json';

	this.emitFile(destName, JSON.stringify(result));

	return source;
};