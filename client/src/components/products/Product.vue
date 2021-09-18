<template>
	<div
		class="product__wrapper -display-flex -w-100"
	>
		<div
			class="product__content"
			:class="productClass"
		>
			<!-- one image with description from left -->
			<ProductImage
				v-if="!twoImages && variant == 2"
				:class="imageOneClass"
				:prodImage="product.images.main[0]"
				class="js-scroll"
			>
				<ProductDescription 
					:class="descriptionClass"
					:product="product"
					class="js-scroll"
				/>
			</ProductImage>
			<!-- other (mix of one or two images and variants where description is always right to the first image) -->
			<ProductImage
				v-else
				:class="imageOneClass"
				:prodImage="product.images.main[0]"
				class="js-scroll"
			/>
			<ProductDescription 
				v-if="twoImages || (!twoImages && variant != 2)"
				:class="descriptionClass"
				:product="product"
				class="js-scroll"
			/>
			<ProductImage 
				v-if="twoImages"
				:class="imageTwoClass"
				:prodImage="product.images.main[1]"
				class="js-scroll"
			/>
		</div>
	</div>	
</template>

<script>
	import ProductImage from './ProductImage.vue';
	import ProductDescription from './ProductDescription.vue';

	import ScrollInAndOut from '../../function/scrollInAndOut.js';

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
		data() {
			return {
				ScrollInAndOut: null
			}
		},
		computed: {
			twoImages() {
				return this.orderId === 0 ? 0 : (this.orderId + Math.round(Math.random())) %2;
				// return 1
			},
			variant() {
				return this.orderId === 0 ? 0 : Math.round(Math.random()*100) % 3;
				// return 2
			},
			productClass() {
				
				const classes = ['-computed'];
				if (this.orderId === 0) classes.push('-first-product');
				const style = this.concatClasses(classes);
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
		mounted() {
			this.ScrollInAndOut = new ScrollInAndOut({callBack: this.addRemoveTranslate});
			this.ScrollInAndOut.evaluateElementsPositions();
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
			},
			addRemoveTranslate(data) {
				if (data.element.classList.contains('-image')) {
					if (data.type === 'IN') data.element.classList.add('js-scrolled-tr-up');
					else if (data.type === 'OUT' && data.scrollDirection === 'UP') data.element.classList.remove('js-scrolled-tr-up');
				} else if (data.element.classList.contains('-description')) {
					if (data.type === 'IN') data.element.classList.add('js-scrolled-tr-down');
					else data.element.classList.remove('js-scrolled-tr-down');
				}
			}
		},
		// mounted() {
		// 	this.$refs['imageOne'].style = `background-image: url('${this.product.images.main[0]}')`
		// }
	}
</script>

<style lang="stylus">

	.product__wrapper
		@media (min-width 650px)
			margin-bottom 10vh
		.product__content
			position relative
			&.-computed
				&.-first-product
					margin-top -3vh
				&.-single-image
					display flex
					margin-left auto
					margin-right auto
					height 70vh
					&.-var-one
						right 0%
						width 100%
						justify-content center
						align-items center
						@media (min-width 650px)
							justify-content flex-end
							right 0%
							width 125%
						@media (min-width 768px)
							right 0%
							width 110%
						@media (min-width 850px)
							right 0%
							width 105%
						@media (min-width 990px)
							right 10%
							width 100%
						@media (min-width 1250px)
							right 22%
							width 100%
					&.-var-two
						right 0%
						width 100%
						justify-content center
						align-items center
						@media (min-width 650px)
							justify-content flex-end
							right 0%
							width 125%
							left -27%
						@media (min-width 768px)
							right 0%
							width 110%
							left -12%
						@media (min-width 850px)
							right 0%
							width 105%
							left -6%
						@media (min-width 990px)
							right 10%
							width 100%
							left unset
						@media (min-width 1250px)
							right 30%
							width 100%
					&.-var-three
						justify-content center
						align-items center
						width 100%
						right 0%
						@media (min-width 650px)
							justify-content flex-end
						@media (min-width 1250px)
							width 100%
							right 15%
				&.-two-images // is always centered
					display flex
					height 70vh
					&.-var-one
					&.-var-two
					&.-var-three
						width 100%
						right 0
						justify-content center
						align-items center
						@media (min-width 650px)
							justify-content unset
							align-items unset
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
								display flex
								overflow hidden
								height 70vh
							img
								height 70vh
						&.-two-images
							overflow hidden
							height 70vh
							display flex
							justify-content center
							&.-var-one
								top 2%
							&.-var-two
								align-self center
							&.-var-three
								align-self end
							@media (min-width 650px)
								height 60vh
								justify-content flex-end
								
							img
								height 70vh
								@media (min-width 650px)
									height 60vh
				&.-two
					&.-computed
						&.-two-images
							&.-var-one
							&.-var-two
							&.-var-three
								display none						
								@media (min-width 768px)
									display block
									overflow hidden
									height 70vh
									left 2%
							img
								height 70vh				
			.-description
				position relative
				z-index 2
				&.-computed
					&.-single-image
						min-width 30vh
						height 30vh
						&.-var-one
							position absolute
							@media (min-width 650px)
								position relative
								left -25vh
							@media (min-width 768px)
								left -12vh
						&.-var-two
							position absolute
							@media (min-width 650px)
								position relative
								left 1%
						&.-var-three
							position absolute
							width 30vh
							top calc(50% - 15vh)
							left calc(50% - 15vh)
							@media (min-width 650px)
								position relative
								top calc(50% - 15vh)
								left 10%
					&.-two-images
						position absolute
						min-width 30vh
						height 30vh
						@media (min-width 650px)
							position relative
							left 1%
							&.-var-one
								top calc(45% - 15vh)
							&.-var-two
								top calc(50% - 15vh)
							&.-var-three
								top calc(50% - 15vh)
			.js-scroll
				transition transform 1000ms ease
			// .js-scrolled - is only indicator for scrollAndOut
			.js-scrolled-tr-down
				transform translateY(20px)
			.js-scrolled-tr-up
				transform translateY(-20px)

</style>