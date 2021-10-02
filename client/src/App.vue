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

	html, body, div, p, span, section,
	h1, h2, h3, h4, h5, h6,
	a, img, button,
	i,
	dl, dt, dd, ol, ul, li,
	form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		//outline-width: 0;
		font: inherit;
		color: inherit;
		vertical-align: baseline;
	}

	*
		box-sizing border-box

	body
		margin 0

	.app
		overflow-x hidden
		font-family $font-family
		font-size $default-font-size
		color $default-font-color
		font-weight $font-weight-regular

		// font
		.h1
			font-family $font-family-hs
			font-weight $font-weight-bold
			font-size 4.7rem
			color $font-color-headings
		.h2
			font-family $font-family-hs
			font-weight $font-weight-bold
			font-size 2.5rem
			color $font-color-headings
		.h3
			font-family $font-family-hs
			font-weight $font-weight-bold
			font-size 1.5rem
			color $font-color-headings

		// font modifiers
		.-bold
			font-weight 600

		// components
		.link
			color $font-color-headings
			&:visited
				color $font-color-headings
			&:hover
				color $font-color-headings

		// display
		.-display-flex
			display flex
			&.-f-column
				flex-direction column

		// alignment & justify
		.-f-justify-content-end
			justify-content flex-end
		.-f-justify-content-center
			justify-content center
		.-f-align-items-center
			align-items center

		.-f-align-self-center
			align-self center

		// widths
		.-w-100
			width 100%

		// margins ////////////////////////////////////////
		//top 
		.-mrgt-1r
			margin-top 1rem
		.-mrgt-10
			margin-top 10px


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
		.-mrgb-10vh
			margin-bottom 10vh

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
		// negative margins
		.-mrgl--5
			margin-left -5px
		.-mrgl--5p
			margin-left -5%

		// left and right
		.-mrgx-auto
			margin-left auto
			margin-right auto
		.-mrgx-10
			margin-left 10px
			margin-right 10px
		

		// paddings
		.-pad-10vh
			padding 10vh
		.-pad-10p
			padding 10%
		.-pad-10
			padding 10px
		.-pad-20
			padding 20px
</style>
