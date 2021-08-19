<template>
	<nav
		class="navigation__menu"
		:class="transformClass"
	>
		
	</nav>
</template>

<script>
	import { navigationItems } from '../../config/products';

	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				navCategories: navigationItems(),
			}
		},
		computed: {
			transformClass() {
				return {
					'transform-show': this.show,
					'transform-hide': !this.show
				}
			}
		}
	}
</script>

<style lang="stylus">
	.navigation__menu
		background-color #ffffffe8
		transition 0.3s ease transform
		&.transform-show
			transform translateY(49vh)
		&.transform-hide
			transform translateY(-50vh)
</style>