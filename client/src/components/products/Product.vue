<template>
	<div
		class="product -display-flex -w-100 -mrgb-10vh"
		:class="productClass"
	>
		<ProductImage
			:class="image1Class"
			:prodImage="product.images.main[0]"
		/>
		<ProductDescription 
			:class="descriptionClass"
			:product="product"
		/>
		<ProductImage 
			v-if="twoImages"
			:class="image2Class"
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
			},
			image1Class() {
				return this.product.main.image1Class;
			},
			descriptionClass() {
				return this.product.main.descriptionClass;
			},
			image2Class() {
				return this.product.main.image2Class;
			},
			productClass() {
				return {
					// '-f-align-items-center': !this.twoImages,
				}
			}
		}
	}
</script>

<style lang="stylus">
	.product
		.product__main-image
			max-width 35%
		.product__main-description
			width 35vh
			height 35vh
			background pink

		// &:first-child
		// 	position relative
		// 	top -30px
		// .box-image
		// 	position relative
		// 	top 0px
		// 	right 200px
		// 	width 60vh
		// 	height 60vh
		// 	background-color red
		// 	.box-info
		// 		position relative
		// 		top 20vh
		// 		right -20%
		// 		width 300px
		// 		height 20vh
		// 		z-index 100
		// 		background-color blue
</style>