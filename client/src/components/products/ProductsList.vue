<template>
	<div
		class="products-list"
	>
		<Product 
			v-for="(product, index) in products"
			:key="product.productId"
			:orderId="index"
			:product="product"
		/>
	</div>
</template>

<script>
	import Product from './Product.vue';

	export default {
		components: {
			Product
		},
		props: {
			products: {
				type: Array,
				default: () => []
			},
		}
	}
</script>

<style lang="stylus">
	.products-list
		z-index 1
</style>