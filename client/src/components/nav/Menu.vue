<template>
	<nav
		id="navigation"
		class="navigation__menu -pad-10vh"
		:class="transformClass"
	>
		<div
			class="-display-flex"
		>
			<div
				class="designer -mrgl-5p"
			>
				{{ translate('designer.name') }}
			</div>
			<div
				class="-display-flex -mrgl-auto -mrgr-20p"
			>
				<div
					class="menu-div -display-flex -f-column -mrgr-20r"
				>
					<div
						class="menu-header"
					>
						{{ translate('navigation.menu.header') }}
					</div>
					<router-link 
						to="/"
						class="link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.home') }}
					</router-link>
					<router-link 
						to="/about"
						class="link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.about') }}
					</router-link>
					<router-link 
						to="/contact"
						class="link"
						@click="changeMenuState()"
					>
						{{ translate('navigation.menu.contact') }}
					</router-link>
				</div>
				<div
					v-if="navCategories.length"
					class="menu-div -display-flex -f-column"
				>
					<div
						class="menu-header"
					>
						{{ translate('navigation.works.header') }}
					</div>
					<router-link 
						v-for="cat in navCategories"
						:key="cat.categoryId"
						:to="cat.to"
						class="link"
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
		background-color #ffffffe8
		transition 0.3s ease transform
		&.transform-show
			transform translateY(49vh)
		&.transform-hide
			transform translateY(-50vh)
		
		.menu-header
			margin-bottom 1vh
</style>