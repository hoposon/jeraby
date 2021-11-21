<template>
	<nav
		id="navigation__menu"
		class="navigation__menu -pad-10vh"
		:class="transformClass"
	>
		<div
			class="navigation__menu_div -display-flex"
		>
			<div
				class="navigation__menu_div designer -mrgl-5p h2 -bold"
			>
				{{ translate('designer.name') }}
			</div>
			<div
				class="navigation__menu_div -display-flex -mrgl-auto -mrgr-20p"
			>
				<div
					class="navigation__menu_div -display-flex -f-column -mrgr-20r"
				>
					<h3
						class="h3 navigation__menu_header"
					>
						{{ translate('navigation.menu.header') }}
					</h3>
					<router-link 
						to="/"
						class="link navigation__menu_link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.home') }}
					</router-link>
					<router-link 
						to="/about"
						class="link navigation__menu_link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.about') }}
					</router-link>
					<router-link 
						to="/contact"
						class="link navigation__menu_link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.contact') }}
					</router-link>
				</div>
				<div
					v-if="navCategories.length"
					class="navigation__menu_div -display-flex -f-column"
				>
					<h3
						class="h3 navigation__menu_header"
					>
						{{ translate('navigation.works.header') }}
					</h3>
					<router-link 
						v-for="cat in navCategories"
						:key="cat.categoryId"
						:to="cat.to"
						class="link navigation__menu_link"
						@click="changeMenuState()"
					>
						{{ translate(cat.name) }}
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import { prodCatNavigation } from '../../config/products';
	import navigationMixin from '../../mixins/navigationMixin';

	export default {
		mixins: [
			navigationMixin
		],
		data() {
			return {
				navCategories: prodCatNavigation(),
			}
		},
		computed: {
			transformClass() {
				return {
					'transform-show': this.showMenu,
					'transform-hide': !this.showMenu
				}
			}
		}
	}
</script>

<style lang="stylus">
	.navigation__menu
		position fixed
		top -50vh
		left 0
		width 100%
		height 50vh
		z-index 10000
		background-color #ffffffe8
		transition 0.3s ease transform
		&.transform-show
			transform translateY(49vh)
		&.transform-hide
			transform translateY(-50vh)
		
		.navigation__menu_header
			margin-bottom 1vh
</style>