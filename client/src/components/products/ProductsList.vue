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

<style lang="stylus">

	.products-list
		.product
			&:first-child
				position relative
				top -30px
			.box-image
				position relative
				top 0px
				right 200px
				width 60vh
				height 60vh
				background-color red
				.box-info
					position relative
					top 20vh
					right -20%
					width 300px
					height 20vh
					z-index 100
					background-color blue

</style>