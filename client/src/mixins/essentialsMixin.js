const essentialsMixin = {
	methods: {
		translate(val, interpolation) {
            return this.$store.getters.translate(val, interpolation)
        }
	}
}

export { essentialsMixin as default}

// module.exports.install = (Vue, { store } = {}) => {
// 	Vue.mixin({
// 		async mounted() {
// 			if (this.$vnode && /CGlobal/i.test(this.$vnode.tag) && !this.digitalriver.library) {
// 				let project = store.state.theme.provider.project,
// 					locale = store.state.url.locale;
// 				await Vue.prototype.digitalriver.loadLibrary({
// 					credentials: env.providers.dr.credentials[project],
// 					variables: env.providers.dr.variables[project],
// 					locale
// 				});
// 				Vue.prototype.digitalriver.initializeLibrary();
// 			}
// 		}
// 	});
// };