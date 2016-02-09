import platformCfg from './../config/platform.config.js';

import styles from './main.styl';
import Popup from './popup/popup.js';

(function(){
	var btn = document.getElementById('btn');

	btn.addEventListener('click', () => {
		var popup = new Popup();

		popup.show();
	});

	let title = document.querySelector('title');

	title.innerText = `[${platformCfg.name}] ${title.innerText} v.${platformCfg.version}`;
})();