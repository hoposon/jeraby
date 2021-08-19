<template>
	<div
		class="products-list"
	>
		<Product 
			v-for="product in products"
			:key="product.productId"
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