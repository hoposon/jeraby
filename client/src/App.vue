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

	body
		margin 0

	.app
		.navigation
			position fixed
			.navigation__burger
				position absolute
				// margin 30px 30px 30px auto
				top 30px
				right 30px
		.introduction
			height 100vh
			background-color #75d4a6













		// display
		.-display-flex
			display flex

		// alignment & justify
		.-f-justify-content-end
			justify-content flex-end

		// widths
		.-w-100
			width 100%
  
</style>
