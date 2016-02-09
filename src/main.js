import styles from './main.styl';

import Popup from './popup/popup.js';

(function(){
	var btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		var popup = new Popup();

		popup.show();
	})
})();