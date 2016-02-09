import Controls from './../controls/controls.js';

class Popup {
	constructor() {
		Controls.create('button', 'OK');
	}

	show() {
		console.info('popup shown');
	}

	hide() {
		console.info('popup hidden');
	}

}

module.exports = Popup;