<template>
	<div
		id="introduction"
		class="introduction -display-flex -f-align-items-center"
	>
		<h1
			class="extra-large -mrgl-5p"
		> 
			{{ translate('designer.name') }}
		</h1>
		<parallax
			class="introduction__picture__parallax"
			parent="introduction"
		>
			<img 
				class="introduction__picture__picture"
				src="../../assets/home-jerab.png"
				alt="jerab" 
			/>
		</parallax>
	</div>
</template>

<script>
	// import essentialMixin from '../../mixins/essentialsMixin';
	// import Parallax from 'vue-parallaxy'
	import Parallax from '../parallax/Parallax.vue';

	export default {
		components: {
			Parallax
		},
		mixins: [
			// essentialMixin
		]
		
	}
</script>

<style lang="stylus">
	.introduction__picture__parallax
		margin-top 25vh
		margin-right 12%
		margin-left auto		
		width 25%
	.introduction__picture__picture
		width 100%
		
</style>