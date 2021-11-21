<template>
	<div
		class="navigation__burger"
	>
		<input
			id="burger_icon"
			type="checkbox" 
			class="navigation__burger__icon"
			:checked="showMenu"
			@click="changeMenuState()"
		>
		<label
			class="navigation__burger_icon_label"
			for="burger_icon"
		>
			<div class="navigation__burger_icon_bar_one"></div>
			<div class="navigation__burger_icon_bar_two"></div>
			<div class="navigation__burger_icon_bar_three"></div>
		</label>
	</div>
</template>

<script>
	import navigationMixin from '../../mixins/navigationMixin';
	export default {
		mixins: [
			navigationMixin
		],
		data() {
			return {
				closeMenuEventHandler: undefined
			}
		},
		methods: {
			hideMenu(event) {
				let hideMenu = true;
				if (this.showMenu) {
					if (event.target.classList) {
						event.target.classList.forEach(cls => {
							if (cls.indexOf("navigation__") > -1) hideMenu = false;
						})
					}
					if (hideMenu) this.changeMenuState();
				}
			}
		},
		created() {
			this.closeMenuEventHandler = this.hideMenu.bind(this);
			window.addEventListener('click', this.closeMenuEventHandler);
		},
		unmounted() {
			window.removeEventListener('click', this.closeMenuEventHandler);
		}
	}
</script>

<style lang="stylus">

	.navigation__burger
		position fixed
		width 100%
		z-index 10001
		#burger_icon
			display none

		label
			display block
			width 30px
			height 30px
			margin 30px 30px 0 auto
			cursor pointer

		label div
			position relative
			height 6px
			background-color $font-color-headings
			margin-bottom 6px
			transition 0.3s ease transform, 0.3s ease top, 0.3s ease width, 0.3s ease right
			border-radius 2px

		label div:first-child
			top 0
			transform-origin 0

		label div:last-child
			top 0
			margin-bottom 0
			transform-origin 30px

		label div:nth-child(2)
			width 30px
			transform-origin center

		#burger_icon:checked + label div:first-child
			top -3px
			transform rotateZ(45deg)

		#burger_icon:checked + label div:last-child
			top 3px
			transform rotateZ(45deg)

		#burger_icon:checked + label div:nth-child(2)
			width 41px
			right 5px
			transform rotateZ(-45deg)

</style>