<template>
	<div
		id="introduction"
		class="introduction -display-flex -f-align-items-center"
	>
		<h1
			class="h1 -mrgl-5p"
		> 
			{{ translate('designer.name') }}
		</h1>
	</div>
</template>

<script>
	// import essentialMixin from '../../mixins/essentialsMixin';

	export default {
		components: {
		},
		mixins: [
			// essentialMixin
		]
		
	}
</script>

<style lang="stylus">
	.introduction
		height 90vh
		background-color whitesmoke
		z-index -1
		background-image url('../../assets/home-jerab.png')
		background-repeat no-repeat
		background-size 25%
		background-position 83% 67%
		background-attachment fixed
		
</style>