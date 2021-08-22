<template>
	<div
		class="app"
	>
		<Navigation />
		<router-view />
	</div>
</template>

<script>
	// import { mapState, mapMutations } from 'vuex';
	import Navigation from './views/Navigation.vue';

	export default {
		components: {
			Navigation
		},
		// computed: {
		// 	...mapState([
		// 		'showMenu'
		// 	])
		// },
		// created() {
		// 	addEventListener('click', this.hideMenu)
		// },
		// methods: {
		// 	...mapMutations([
		// 		'changeMenuState'
		// 	]),
		// 	hideMenu(event) {
		// 		console.log('event 1>>> ', event)
		// 		// event.path.find(p => p.classList.indexOf('navigation__menu'))
		// 		// event.path.forEach(p => {console.log('event >>>', p)})
		// 		// console.log('event 1>>> ', )
		// 		// event.path.find(p => p.classList && p.classList.forEach(c => console.log('classlist >>> ', c)) && p.classList.indexOf(c => c))
		// 		// if (
		// 		// 	!event.path.find(p => p.classList && p.classList.indexOf('navigation__menu')) &&
		// 		// 	!['burger_icon', 'navigation'].find(id => id === event.target.id) &&
		// 		// 	this.showMenu
		// 		// ) {
		// 		// 	console.log('event >>> ', event)
		// 		// 	this.changeMenuState();
		// 		// }
		// 	}
		// }
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
		//top 



		// right
		.-mrgr-5r
			margin-right 5rem
		.-mrgr-10r
			margin-right 10rem
		.-mrgr-15r
			margin-right 15rem
		.-mrgr-20r
			margin-right 20rem

		.-mrgr-5
			margin-right 5px
		.-mrgr-10
			margin-right 10px
		.-mrgr-15
			margin-right 15px
		.-mrgr-20
			margin-right 20px

		.-mrgr-5p
			margin-right 5%
		.-mrgr-10p
			margin-right 10%
		.-mrgr-15p
			margin-right 15%
		.-mrgr-20p
			margin-right 20%
  
		// bottom
		.-mrgb-5vh
			margin-bottom 5vh

		// left
		.-mrgl-auto
			margin-left auto
		
		.-mrgl-5
			margin-left 5px

		.-mrgl-5p
			margin-left 5%
		.-mrgl-10p
			margin-left 10%
		.-mrgl-15p
			margin-left 15%
		.-mrgl-20p
			margin-left 20%

		

		// paddings
		.-pad-10vh
			padding 10vh
</style>
