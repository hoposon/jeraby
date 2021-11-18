<template>
	<div
		id="introduction"
		class="introduction -display-flex -f-align-items-center"
		:class="className"
	>
		<slot></slot>
	</div>
</template>

<script>
	// import essentialMixin from '../../mixins/essentialsMixin';

	export default {
		props: {
			className: {
				type: Array,
				default: () => []
			}
		}
		
	}
</script>

<style lang="stylus">
	.introduction
		height 90vh
		z-index -1
		
</style>