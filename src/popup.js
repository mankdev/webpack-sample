var Controls = require('./controls.js');

var Popup = (function() {
	return function Popup() {
		Controls.create('button', 'OK');

		return {
			show: function() {
				console.info('popup shown');
			},

			hide: function() {
				console.info('popup hidden');
			}
		}
	}
})();

module.exports = Popup;