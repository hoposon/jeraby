<template>
	<div
		ref="parallax"
		class="parallax"
	>
		<slot></slot>
	</div>

</template>

<script>
	export default {
		props: {
			parent: {
				type: String,
				default: ''
			}
		},
		data () {
			return {
				el: null,
				parEl: null,
				speedFactor: 1.5,
				direction: 'up'
				// mediaQuery: null
			}
		},
		mounted () {
			this.el = this.$refs.parallax;
			this.parEl = document.querySelector(`#${this.parent}`);

			window.requestAnimationFrame = window.requestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (f) {
					setTimeout(f, 1000 / 60)
				}

			this.init();
		},
		methods: {
			animateElement () {
				const parentHeight = this.parEl.offsetHeight;
				console.log('parentHeight >>>', parentHeight)
				const parallaxHeight = this.el.offsetHeight;
				console.log('parallaxHeight >>>', parallaxHeight)
				const availableOffset = parentHeight - parallaxHeight;
				console.log('availableOffset >>>>', availableOffset)
				let animationValue = (window.pageYOffset * this.speedFactor);
				console.log('animationValue >>>>', animationValue)
				if (animationValue <= availableOffset && animationValue >= 0) {
					this.el.style.transform = `translate3d(0, ${animationValue * this.directionValue}px ,0)`
				}
			},
			scrollHandler () {
				window.requestAnimationFrame(() => {
					if (this.isInView(this.$refs.parallax)) {
						this.animateElement()
					}
				})
			},
			isInView (el) {
				let rect = el.getBoundingClientRect()
				return (
					rect.bottom >= 0 &&
					rect.top <= (window.innerHeight || document.documentElement.clientHeight)
				)
			},
			setupListener () {
				// if (this.mediaQuery.matches) {
				// 	window.addEventListener('scroll', this.scrollHandler, false)
				// } else {
				// 	window.removeEventListener('scroll', this.scrollHandler, false)
				// }
				window.addEventListener('scroll', this.scrollHandler, false)
			},
			init () {
				// this.mediaQuery = window.matchMedia(this.breakpoint)
				// if (this.mediaQuery) {
				// 	this.mediaQuery.addListener(this.setupListener)
				// 	this.setupListener()
				// }
				this.setupListener()
			}
		},
		beforeUnmount () {
			window.removeEventListener('scroll', this.scrollHandler, false)
		},
		computed: {
			directionValue () {
				return this.direction === 'down' ? -1 : +1
			}
		}
  }
</script>

<style lang="stylus">
	.parallax
		z-index -2
</style>