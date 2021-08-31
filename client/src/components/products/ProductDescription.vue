<template>
	<div
		ref="description"
	>
		{{translate(product.productName)}}
	</div>
</template>

<script>

	export default {
		props: {
			product: {
				type: Object,
				default: () => {}
			}
		},
		mounted() {
			for (const key in this.product.main.descStyle) {
				console.log('key >>>', key)
				this.$refs['description'].style[key] = this.product.main.descStyle[key];
			}
		}
	}
</script>