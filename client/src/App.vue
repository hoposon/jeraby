<template>
	<div
		class="app"
	>
		<Navigation />
		<router-view />
	</div>
</template>

<script>
	import Navigation from './views/Navigation.vue';

	export default {
		components: {
			Navigation
		}	
	}
</script>

<style lang="stylus">

	*
		box-sizing border-box

	body
		margin 0

	.app
		.navigation
			.navigation__burger
				position fixed
				width 100%
			.navigation__menu
				position fixed
				top -50vh
				left 0
				width 100%
				height 50vh
				
				
		.introduction
			height 90vh
			background-color #75d4a6

		// components
		.link
			color green
			&:visited
				color green
			&:hover
				color black

		// font
		.extra-large
			font-size 45px
		.h1
			font-size 30px



		// display
		.-display-flex
			display flex
			&.-f-column
				flex-direction column

		// alignment & justify
		.-f-justify-content-end
			justify-content flex-end
		.-f-align-items-center
			align-items center

		// widths
		.-w-100
			width 100%

		// margins
		.-mrgl-5
			margin-left 5px
		.-mrgl-5p
			margin-left 5%
  
		.-mrgb-5vh
			margin-bottom 5vh

		// paddings
		.-pad-10vh
			padding 10vh
</style>
