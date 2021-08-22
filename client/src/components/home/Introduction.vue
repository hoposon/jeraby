<template>
	<div
		class="introduction -display-flex -f-align-items-center"
	>
		<h1
			class="extra-large -mrgl-5p"
		> 
			{{ translate('designer.name') }}
		</h1>
		<img 
			class="introduction__picture"
			src="../../assets/home-jerab.png"
			alt="jerab" />
	</div>
</template>

<script>
	// import essentialMixin from '../../mixins/essentialsMixin';

	export default {
		mixins: [
			// essentialMixin
		]
		
	}
</script>

<style lang="stylus">
	.introduction__picture
		margin-left 45%
		height 45vh
		margin-top 25vh
</style>