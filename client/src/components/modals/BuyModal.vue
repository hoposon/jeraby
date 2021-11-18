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
				class="-display-flex -f-column -f-align-items-center -mrgt-1r"
			>
				<img
					:src="imageSrc"
					:alt="imageAlt"
					class="prod-image"
				/>
				<div
					class="-mrgt-1r"
				>
					{{ translate('buy.modal.prod.name') }}
					{{ translate(modalProduct.productName) }}
				</div>
				<div>
					{{ translate('prod.size') }}
					{{ modalProduct.size }}
				</div>
			</div>
			<form 
				class="-display-flex -f-column -mrgt-1r -w-80"
				@submit:prevent="submit()"
			>
				<div>
					<StInput
						type="email"
						:placeholder="translate('buy.modal.enter.email')"
						:validator="emailValidator"
						errorMessage="buy.modal.email.invalid"
						@st-focus="handleEvent($event)"
						@st-input="handleEvent($event)"
						@st-blur="handleEvent($event)"
					/>
					<StTextArea
						type="messageBody"
						:placeholder="translate('buy.modal.enter.comment')"
						:className="['-mrgt-05r']"
						@st-focus="handleEvent($event)"
						@st-input="handleEvent($event)"
						@st-blur="handleEvent($event)"
					/>
				</div>
				<div 
					class="modal__modal-actions -mrgt-2r"
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
						:disabled="disabled"
						:aria-disabled="disabled"
						:value="translate('global.btn.send')"			
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
	import StTextArea from '../basic/inputs/StTextArea.vue'

	// validations
	import { emailValidator } from '../../validations/inputValidations.js'

	export default {
		components: {
			StInput,
			StTextArea
		},
		mixins: [
			essentialMixin,
			modalMixin
		],
		data() {
			return {
				inputsStates: {
					'email': {
						initialized: false,
						invalid: true,
					}
				},
				formSent: false
			}
		},
		computed: {
			imageSrc() {
				return this.modalProduct.images.main[0].path;
			},
			imageAlt() {
				return this.modalProduct.images.main[0].name;
			},
			disabled() {
				return !this.inputsStates['email'] || this.inputsStates['email'].invalid || this.formSent;
			}
		},
		methods: {
			emailValidator(email) {
				return emailValidator(email);
			},
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
			},
			submit() {

			}
		}
		
	}
</script>

<style lang="stylus">
	.prod-image
		height 130px
		max-height 130px
</style>