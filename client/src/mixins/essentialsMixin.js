const essentialsMixin = {
	methods: {
		translate(val, ...trnsl) {
            return this.$store.getters.translate(val, ...trnsl)
        }
	}
}

export { essentialsMixin as default}