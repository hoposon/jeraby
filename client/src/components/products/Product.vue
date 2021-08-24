<template>
	<div
		class="product -display-flex -w-100 -mrgb-10vh"
	>
		<div
			:class="imageClass"
		>
			<ProductImage
				:class="imageOneClass"
				:prodImage="product.images.main[0]"
			/>
			<ProductDescription 
				:class="descriptionClass"
				:product="product"
			/>
			<ProductImage 
				v-if="twoImages"
				:class="imageTwoClass"
				:prodImage="product.images.main[1]"
			/>
		</div>
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
			product: {
				type: Object,
				default: () => {}
			},
			orderId: {
				type: Number,
				default: 0
			}	
		},
		computed: {
			twoImages() {
				return (this.orderId + Math.round(Math.random())) %2;
			},
			variant() {
				return 2;
			},
			imageClass() {
				const style = [];
				if (this.twoImages) {
					style.push('two-images');
				} else {
					style.push('single-image');
				}

				switch(this.variant) {
					case 1:
						style.push('__variant-one');
						break;
					case 2:
						style.push('__variant-two');
						break;
				}
				return style
			},
			imageOneClass() {
				const style = [];
				switch(this.variant) {
					case 1:
						style.push('image-one__variant-one');
						break;
					case 2:
						style.push('image-one__variant-two');
						break;
				}
				return style
			},
			descriptionClass() {
				const style = [];
				switch(this.variant) {
					case 1:
						style.push('desc__variant-one');
						break;
					case 2:
						style.push('desc__variant-two');
						break;
				}
				return style
			},
			imageTwoClass() {
				const style = [];
				if (this.twoImages) {
					switch(this.variant) {
						case 1:
							style.push('image-two__variant-one');
							break;
						case 2:
							style.push('image-two__variant-two');
							break;
					}
				}
				return style
			},

			// twoImages() {
			// 	return this.product.images.main.length === 2
			// },
			// image1Class() {
			// 	return this.product.main.image1Class;
			// },
			// descriptionClass() {
			// 	return this.product.main.descriptionClass;
			// },
			// image2Class() {
			// 	return this.product.main.image2Class;
			// },
			// productClass() {
			// 	return {
			// 		// '-f-align-items-center': !this.twoImages,
			// 	}
			// }
		}
	}
</script>

<style lang="stylus">
	.product
		// .product__main-image
		// 	max-width 35%
		// .product__main-description
		// 	width 35vh
		// 	height 35vh
		// 	background pink

		.single-image
			display flex
			&.__variant-one // justified left
				.image-one__variant-one
					margin-left 5%
					max-width 45%
				.desc__variant-one
					align-self center
					width 35vh
					height 35vh
			&.__variant-two
				margin-left auto // justified right
				.image-one__variant-two
					margin-right 0
					max-width 45%
				.desc__variant-two
					align-self center
					margin-right 5%
					width 35vh
					height 35vh
		.two-images
			display flex
			&.__variant-one
				margin auto // justified center
				.image-one__variant-one
					margin-left 5%
					max-width 35%
				.desc__variant-one
					align-self center
					width 35vh
					height 35vh
				.image-two__variant-one
					margin-top 5%
					max-width 35%
			&.__variant-two
				margin-left auto // justified right
				.image-one__variant-two
					margin-right 5%
					max-width 35%
				.desc__variant-two
					align-self center
					width 35vh
					height 35vh
				.image-two__variant-two
					margin-top 5%
					max-width 35%

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