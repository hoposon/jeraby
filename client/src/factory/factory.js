// initialize neccessary functions

import i18next from 'i18next';
import resources from '../data/translations';

function initTranslation(lang='cz') {
	return i18next.init({
		lng: lang, // if you're using a language detector, do not define the lng option
		debug: true,
		resources
	});
}


export default class Factory {
	constructor({
		lang='cz'
	}={}) {
		this.lang = lang;

		initTranslation(this.lang);
	}

	translate(msgId, interpolation) {
		return i18next.t(msgId, interpolation);
	}
}
	