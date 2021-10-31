import { createStore } from 'vuex';
import Factory from '../factory/factory';

const factory = new Factory();

	export default createStore({
	state: {
		translate: factory.translate,
		showMenu: false,
		showModal: {
			show: false,
			product: null
		}
	},
	getters: {
		translate: (state) => (trnsl, ...val) => {
			return state.translate(trnsl, ...val);
		},
	},
	mutations: {
		changeMenuState(state) {
			state.showMenu = !state.showMenu;
		},
		modalShow(state, modalName, product) {
			console.log('modalShow', modalName)
			state.showModal = {
				show: modalName,
				product
			}
		},
		modalHide(state) {
			state.showModal.show = false;
		}
	},
	actions: {
	},
	modules: {
	}
})
