<template>
	<h1
		class="h1 -mrgl-5p"
	> 
		{{ translate(categoryName) }}
	</h1>
</template>

<script>
	import essentialMixin from '../../mixins/essentialsMixin.js'

	export default {
		mixins:[
			essentialMixin
		],
		props: {
			categoryName: {
				type: String,
				default: ''
			}
		}
		
	}
</script>