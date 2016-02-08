import Popup from './popup.js';

(function(){
	var btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		var popup = new Popup();

		popup.show();
	})
})();