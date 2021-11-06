<template>
	<div 
		class="modal__modal-content"
	>
		<div 
			class="modal__modal-body"
		>
			<h2
				class="h2"
			>
				{{ translate(modalProduct.buyButton) }}
			</h2>
			<div
				class="-display-flex -f-column -f-align-items-center"
			>
				<img
					:src="modalProduct.images.main.path"
					:alt="modalProduct.images.main.name"
					class="prod-image"
				/>
				<div>
					{{ translate('buy.modal.prod.name') }}
					{{ translate(modalProduct.productName) }}
				</div>
				<div>
					{{ translate('prod.size') }}
					{{ modalProduct.size }}
				</div>
			</div>
			<form 
				class="-display-flex -f-column"
				@submit:prevent="submit()"
			>
				<div>
					<StInput
						type="email"
						:placeholder="translate('buy.modal.enter.email')"
						@st-focus="handleEvent($event)"
						@st-input="handleEvent($event)"
						@st-blur="handleEvent($event)"
					/>
					<StInput
						type="messageBody"
						:placeholder="translate('buy.modal.enter.comment')"
						@st-focus="handleEvent($event)"
						@st-input="handleEvent($event)"
						@st-blur="handleEvent($event)"
					/>
				</div>
				<div 
					class="modal__modal-actions -mrgt-30"
				>
					<button
						class="btn -white -mrgx-10 -mrgb-10 -mrgb-0-lg" 
						@click="closeModal()"
					>
						{{ translate('global.btn.close') }}
					</button>
					<input
						class="btn -mrgx-10 -mrgb-10 -mrgb-0-lg"
						type="submit"
						:value="translate('global.btn.send')"
						@click="showSelected()"					
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	// mixins
	import essentialMixin from '../../mixins/essentialsMixin.js';
	import modalMixin from '../../mixins/modalMixin.js'

	// components
	import StInput from '../basic/inputs/StInput.vue';

	export default {
		components: {
			StInput
		},
		mixins: [
			essentialMixin,
			modalMixin
		],
		data() {
			return {
				inputsStates: {}
			}
		},
		methods: {
			handleEvent(event) {
				// console.log('cardHolder handleEvent >>>', event)
				this.inputsStates = {
					...this.inputsStates,
					...event
				};
				// console.log('cardHolder this.inputsStates >>>', this.inputsStates)

				// let invalid = false;
				// for (const inp in this.inputsStates) {
				// 	if(this.inputsStates[inp].invalid) invalid = true;
				// }
				
				// this.$emit('inputsState', {invalid, inputsStates: this.inputsStates});
			}
		}
		
	}
</script>