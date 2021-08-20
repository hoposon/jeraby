<template>
	<nav
		class="navigation__menu -display-flex -pad-10vh"
		:class="transformClass"
	>
		<div
			class="designer"
		>
			{{ translate('designer.name') }}
		</div>
		<div
			class="menu-div -display-flex -f-column"
		>
			<div
				class="menu-header"
			>
				{{ translate('navigation.menu.header') }}
			</div>
			<router-link 
				to="/home"
				class="link"
			>
				{{ translate('navigation.menu.home') }}
			</router-link>
			<router-link 
				to="/about"
				class="link"
			>
				{{ translate('navigation.menu.about') }}
			</router-link>
			<router-link 
				to="/contact"
				class="link"
			>
				{{ translate('navigation.menu.contact') }}
			</router-link>
		</div>
		<div
			v-if=""
			class="menu-div -display-flex -f-column"
		>
		</div>
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
		
		.menu-header
			margin-bottom 1vh
</style>