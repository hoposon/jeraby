import { createStore } from 'vuex';
import Factory from '../factory/factory';

const factory = new Factory();

	export default createStore({
	state: {
		translate: factory.translate
	},
	getters: {
		translate: (state) => (trnsl, ...val) => {
			return state.translate(trnsl, ...val);
		},
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
