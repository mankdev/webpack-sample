var Popup = (function() {
	return function Popup() {
		Controls.create('button', 'OK');

		return {
			show: function() {
				console.log('popup shown');
			},

			hide: function() {
				console.log('popup hidden');
			}
		}
	}
})();