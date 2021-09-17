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
		background-image url('../../assets/home-jerab.png')
		background-repeat no-repeat
		background-size 25%
		background-position 83% 67%
		background-attachment fixed
		
</style>