import { createStore } from 'vuex';
import Factory from '../factory/factory';

const factory = new Factory();

	export default createStore({
	state: {
		translate: factory.translate,
		showMenu: false,
		ModalState: {
			show: false,
			product: null
		}
	},
	getters: {
		translate: (state) => (trnsl, interpolation) => {
			return state.translate(trnsl, interpolation);
		},
	},
	mutations: {
		changeMenuState(state) {
			state.showMenu = !state.showMenu;
		},
		modalShow(state, {modalName, product}) {
			console.log('modalShow', modalName)
			console.log('modalShow', product)
			state.ModalState = {
				show: modalName,
				product
			}
		},
		modalHide(state) {
			state.ModalState.show = false;
		}
	},
	actions: {
	},
	modules: {
	}
})
