<template>
	<div
		class="introduction -display-flex"
	>
		{{ translate('designer.name') }}
	</div>
</template>

<script>
	import essentialMixin from '../mixins/essentialsMixin';

	export default {
		mixins: [
			essentialMixin
		]
		
	}
</script>