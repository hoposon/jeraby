import { createStore } from 'vuex'
import Parse from 'parse';
import {
	createBuyRequest
} from '../data/parseTypes';

Parse.initialize('D1GxqolYkhpwXoIasj6u0mhyZBf39w832PB39kyh', 'hK1irYeW2s7uJ0PhrQhWwTmyaduaLScLfTnvEO6k');
Parse.serverURL = "https://parseapi.back4app.com/";



	export default createStore({
	state: {
		parse: Parse
	},
	mutations: {
	},
	actions: {
		// eslint-disable-next-line no-empty-pattern
		async sendBuyRequestMethod({}, data) {
			return await createBuyRequest(Parse, data).save()
		}
	},
	modules: {
	}
})
