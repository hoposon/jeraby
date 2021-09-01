<template>
	<div
		class="product__wrapper -display-flex -w-100 -mrgb-10vh"
	>
		<div
			class="product__content -display-flex"
			:class="productClass"
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
				return this.orderId === 0 ? 0 : (this.orderId + Math.round(Math.random())) %2;
			},
			variant() {
				// return Math.round(Math.random()*100) % 3;
				return 2
			},
			productClass() {
				
				const style = this.concatClasses(['-computed']);
				return style;
				
			},
			imageOneClass() {
				
				const style = this.concatClasses(['-image', '-one', '-computed']);
				return style;
				
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
		}
	}
</script>

<style lang="stylus">

	.product__wrapper
		.product__content
			position relative
			&.-computed
				&.-single-image
					// width 75rem
					max-width 940px
					margin-left auto
					margin-right auto
					&.-var-one
						right 10%
					&.-var-two
						left 15%
					&.-var-three
						right 5%
				&.-two-images // is always centered
					&.-var-one
					&.-var-two
					&.-var-three
						margin auto
			.-image
				position relative
				&.-one
					&.-computed
						&.-single-image
							&.-var-one
							&.-var-two
							&.-var-three
								// width 65rem
								width 80%
						&.-two-images
							max-width 35%
							&.-var-one
								left 5%
							&.-var-two
								left 20%
							&.-var-three
								margin auto
							
				&.-two
					max-width 30%
					// &.-computed
					// 	&.-two-images
					// 		&.-var-one
					// 			left 5%
					// 		&.-var-two
					// 			left 20%
					// 		&.-var-three
					// 			margin auto
				img
					width 100%
			.-description
				position relative
				z-index 1
				&.-computed
					&.-single-image
						// width 15rem
						// height 15rem
						width 30vh
						height 30vh
						&.-var-one
							left -5%
							top calc(50% - 15vh)
						&.-var-two
							left 1%
							top calc(50% - 15vh)
						&.-var-three
							left -5%
							top calc(50% - 15vh)
					&.-two-images
						&.-var-one
							left 5%
						&.-var-two
							left 20%
						&.-var-three
							margin auto


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