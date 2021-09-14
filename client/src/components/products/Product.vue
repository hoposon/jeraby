<template>
	<div
		class="product__wrapper -display-flex -w-100 -mrgb-10vh"
	>
		<div
			class="product__content"
			:class="productClass"
		>
			<!-- one image -->
			<ProductImage
				v-if="!twoImages && variant == 2"
				:class="imageOneClass"
				:prodImage="product.images.main[0]"
			>
				<ProductDescription 
					:class="descriptionClass"
					:product="product"
				/>
			</ProductImage>
			<!-- two images -->
			<ProductImage
				v-else
				:class="imageOneClass"
				:prodImage="product.images.main[0]"
			/>
			<ProductDescription 
				v-if="twoImages || (!twoImages && variant != 2)"
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
				// return this.orderId === 0 ? 0 : (this.orderId + Math.round(Math.random())) %2;
				return 1
			},
			variant() {
				return this.orderId === 0 ? 0 : Math.round(Math.random()*100) % 3;
				// return 2
			},
			productClass() {
				
				const style = this.concatClasses(['-computed']);
				return style;
				
			},
			imageOneClass() {
				
				const style = this.concatClasses(['-image', '-one', '-computed']);
				return style;
				
			},
			imageOneStyle() {

				return {
					// 'background-image': `url(${this.product.images.main[0]})`
					fontSize: 50 + 'px'
				}

			},
			descriptionClass() {
				
				const style = this.concatClasses(['-description', '-computed']);
				return style;

			},
			imageTwoClass() {
				
				const style = this.concatClasses(['-image', '-two', '-computed']);
				return style;

			}
		},
		mounted() {

		},
		methods: {
			concatClasses(classesArr) {
				const style = classesArr || [];
				if (this.twoImages) {
					style.push('-two-images');
				} else {
					style.push('-single-image');
				}
				
				switch(this.variant) {
					case 0:
						style.push('-var-one');
						break;
					case 1:
						style.push('-var-two');
						break;
					case 2:
						style.push('-var-three');
						break;
				}

				return style;
			}
		},
		// mounted() {
		// 	this.$refs['imageOne'].style = `background-image: url('${this.product.images.main[0]}')`
		// }
	}
</script>

<style lang="stylus">

	.product__wrapper
		.product__content
			position relative
			&.-computed
				&.-single-image
					// width 75rem
					// width 940px
					display flex
					justify-content flex-end
					margin-left auto
					margin-right auto
					height 70vh
					&.-var-one
						width 90%
						right 5%
					&.-var-two
						width 90%
						right 15%
					&.-var-three
						width 90%
						right 20%
				&.-two-images // is always centered
					display flex
					height 70vh
					&.-var-one
					&.-var-two
					&.-var-three
						width 100%
						right 5%
			.-image
				position relative
				&.-one
					&.-computed
						&.-single-image
							&.-var-one
							&.-var-two
								overflow hidden
								height 70vh
							&.-var-three
								// width 65rem
								// width 80%
								display flex
								overflow hidden
								height 70vh
							img
								height 70vh
						&.-two-images
							overflow hidden
							height 60vh
							&.-var-one
								top 2%
							&.-var-two
								align-self center
							&.-var-three
								align-self end
								
							img
								height 60vh
				&.-two
					&.-computed
						&.-two-images
							&.-var-one
							&.-var-two
							&.-var-three
								overflow hidden
								height 70vh
								left 2%
							img
								height 70vh				
			.-description
				position relative
				z-index 1
				transition transform 1000ms ease
				&.-computed
					&.-single-image
						// width 15rem
						// height 15rem
						min-width 30vh
						height 30vh
						&.-var-one
							left -5%
							top calc(50% - 15vh)
						&.-var-two
							left 1%
							top calc(50% - 15vh)
						&.-var-three
							width 30vh
							left 10%
							top calc(50% - 15vh)
					&.-two-images
						min-width 30vh
						height 30vh
						left 1%
						&.-var-one
							top calc(45% - 15vh)
						&.-var-two
							top calc(50% - 15vh)
						&.-var-three
							top calc(50% - 15vh)
				&.move
					transform translateY(10px)
							


	// .product-wrapper
		// .product__main-image
		// 	max-width 35%
		// .product__main-description
		// 	width 35vh
		// 	height 35vh
		// 	background pink
		// .product-content
		// .single-image
		// 	display flex
		// 	&.__variant-one // justified left
		// 		.image-one__variant-one
		// 			margin-left 5%
		// 			max-width 45%
		// 		.desc__variant-one
		// 			align-self center
		// 			width 35vh
		// 			height 35vh
		// 	&.__variant-two
		// 		margin-left auto // justified right
		// 		.image-one__variant-two
		// 			margin-right 0
		// 			max-width 45%
		// 		.desc__variant-two
		// 			align-self center
		// 			margin-right 5%
		// 			width 35vh
		// 			height 35vh
		// .two-images
		// 	display flex
		// 	&.__variant-one
		// 		margin auto // justified center
		// 		.image-one__variant-one
		// 			margin-left 5%
		// 			max-width 35%
		// 		.desc__variant-one
		// 			align-self center
		// 			width 35vh
		// 			height 35vh
		// 		.image-two__variant-one
		// 			margin-top 5%
		// 			max-width 35%
		// 	&.__variant-two
		// 		margin-left auto // justified right
		// 		.image-one__variant-two
		// 			margin-right 5%
		// 			max-width 35%
		// 		.desc__variant-two
		// 			align-self center
		// 			width 35vh
		// 			height 35vh
		// 		.image-two__variant-two
		// 			margin-top 5%
		// 			max-width 35%

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