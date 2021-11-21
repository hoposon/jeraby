<template>
	<router-link
		:to="`/product/${product.productId}`"
	>
		<slot></slot>
		<img
			:src="product.images.main[0].path"
			:alt="product.images.main[0].name"
			class="main-image"
		/>
	</router-link>
</template>

<script>

	export default {
		props: {
			product: {
				type: Object,
				default: () => {}
			}
		},
		// created() {
		// 	console.log("prodImage >>>>", this.prodImage)
		// }
	}
</script>

<style lang="stylus">
	// .main-image
	// 	height 70vh
</style>