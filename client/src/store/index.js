import { createStore } from 'vuex'
import Parse from 'parse';

Parse.initialize('D1GxqolYkhpwXoIasj6u0mhyZBf39w832PB39kyh', 'hK1irYeW2s7uJ0PhrQhWwTmyaduaLScLfTnvEO6k');
Parse.serverURL = "https://parseapi.back4app.com/";

const BuyRequest = Parse.Object.extend("BuyRequest");
const 

export default createStore({
  state: {
	  parse: Parse
  },
  mutations: {
  },
  actions: {
	async sendBuyRequestMethod({state}, {email, product}={}) {
		try {
			const buyRequest = new BuyRequest();
			buyRequest.set('email', email);
			buyRequest.set('product', product);
			buyRequest.set('requestDate', Date.now());

			return await state.parse
		} catch(e) {
			throw e;
		}
	}
  },
  modules: {
  }
})
