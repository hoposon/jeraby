import { mapState, mapMutations } from "vuex";

const ESCAPE = 27;

const modalMixin = {
	computed: {
		...mapState([
			'ModalState'
		])
	},
	methods: {
		...mapMutations([
			'modalShow',
			'modalHide'
		]),
		hide(event) {
			if (event.type === 'click' && event.target.id === 'modalOverlay') {
				this.closeModal();
			}
			if (event.type === 'keydown' && event.keyCode === ESCAPE && this.modalRouter.componentType === 'modal') {
				this.closeModal();
			}
		},
		closeModal() {
			this.modalHide();
		},
	}	
}

export { modalMixin as default };