<template>
	<div
		class="-display-flex -f-align-items-center"
	>
		<!-- <i
			class="-mrgr-5"
			:class="iconClass"
		/> -->
		<span
			:class="messageClass"
			v-html="messageText"			
		/>
	</div>
</template>

<script>
	export default {
		props: {
			messageType: {
				type: String,
				default: 'error'
			},
			messageText: {
				type: String,
				default: ''
			},
			messageClass: {
				type: Array,
				default: () => ['input-err-message']
			}
		},
		computed: {
			// iconClass() {
			// 	switch(this.messageType) {
			// 		case 'error':
			// 			return ['icon', 'icon-16', 'icon-tick-confirm-error']
			// 		default:
			// 			return []
			// 	}
			// },
		}
	}
</script>