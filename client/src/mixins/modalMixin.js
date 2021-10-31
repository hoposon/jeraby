import { mapState, mapMutations } from "vuex";

const modalMixin = {
	computed: {
		...mapState({
			modalName: 'showModal'
		})
	},
	methods: {
		...mapMutations([
			'modalShow',
			'modalHide'
		])
	}	
}

export { modalMixin as default };