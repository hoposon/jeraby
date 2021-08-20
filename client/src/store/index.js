import { createStore } from 'vuex';
import Factory from '../factory/factory';

const factory = new Factory();

	export default createStore({
	state: {
		translate: factory.translate,
		showMenu: false
	},
	getters: {
		translate: (state) => (trnsl, ...val) => {
			return state.translate(trnsl, ...val);
		},
	},
	mutations: {
		changeMenuState(state) {
			state.showMenu = !state.showMenu;
		}
	},
	actions: {
	},
	modules: {
	}
})
