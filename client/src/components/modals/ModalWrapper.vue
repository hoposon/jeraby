<template>
	<div
		id="modalOverlay" 
		class="modal"
		@click="hide($event)"		
	>		
		<div 
			class="modal__close-anchor"
		>
			<div 
				class="modal__close-wrapper"
			>
				<button 
					class="modal__close-btn"
					@click="closeModal()"
				>
					X
					<!-- <i class="icon -x" /> -->
				</button>
			</div>
		</div>
		<div 
			ref="modalDialog" 
			tabindex="-1" 
			role="dialog"
			class="modal__modal-dialog -modal-scrollbar min-height-auto-lg"
		>
			<component :is='ModalState.show' />
		</div>
	</div>
</template>


<script>
	import modalMixin from '../../mixins/modalMixin.js';

	import BuyModal from './BuyModal.vue';

	export default {
		components: {
			BuyModal
		},
		mixins: [
			modalMixin
		]	
	}
</script>