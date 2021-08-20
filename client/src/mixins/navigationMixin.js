import { mapMutations, mapState } from "vuex";

const navigationMixin = {
	computed: {
		...mapState([
			'showMenu'
		])
	},
	methods: {
		...mapMutations([
			'changeMenuState'
		])
	}
}

export {navigationMixin as default};