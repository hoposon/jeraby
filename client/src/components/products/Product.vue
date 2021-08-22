<template>
	<div
		class="product"
	>
		<ProductImage 
			:prodImage="product.images.main[0]"
		/>
		<ProductDescription 
			:product="product"
		/>
		<ProductImage 
			v-if="twoImages"
			:prodImage="product.images.main[1]"
		/>
	</div>	
</template>

<script>
	import ProductImage from './ProductImage.vue';
	import ProductDescription from './ProductDescription.vue';

	export default {
		components: {
			ProductImage,
			ProductDescription
		},
		props: {
			product: Object,
			default: () => {}
		},
		computed: {
			twoImages() {
				return this.product.images.main.length === 2
			}
		}
	}
</script>

<style lang="stylus">
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