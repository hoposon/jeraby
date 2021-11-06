<template>
	<div 
		class="text-input"
		:class="wrapperClass"
	>
		<div
			class="-pos-relative"
		>
			<input 
				:id="`id-form-st-fld-${type}`"
				v-model="inputValue"
				:type="inputType" 
				:aria-required="required" 
				:aria-invalid="inputState.invalid" 
				:data-test="`card-holder-detail-${type}-input`"
				class="-w-100"
				:class="inputClass"
				:disabled="disabled"
				:aria-disabled="disabled"
				@input="handleEvent($event, 'st-input')"
				@focus="handleEvent($event, 'st-focus')" 
				@blur="handleEvent($event, 'st-blur')"
			>
			<label 
				:for="`id-form-st-fld-${type}`"
				class="text-input__placeholder"
			>
				{{ placeholder }}
			</label>
		</div>
	</div>
</template>

<script>
	//mixins
	// import essentialsMixin from '../../../mixins/essentialsMixin.js';

	export default {
		// mixins: {
		// 	// essentialsMixin
		// },
		// props: {
		// 	type: {
		// 		type: String,
		// 		// required: true
		// 	},
		// },
		props: {
			type: {
				type: String,
				required: true
			},
			required: {
				type:Boolean,
				default: true
			},
			inputType: {
				type: String,
				default: 'text'
			},
			className: {
				type: Array,
				default: () => {}
			},
			disabled: {
				type: Boolean,
				default: false
			},
			value: {
				type: [String, Number],
				default: ''
			},
			placeholder: {
				type: String,
				default: ''
			},
			validator: {
				type: Function,
				default: () => true
			},
			validatorParams: {
				type: Array,
				default: () => []
			},
			formator: {
				type: Function,
				default: (value) => value
			},
			errorMessage: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				inputState: {
					focused: false,
					filled: false,
					invalid: this.required,
					initialized: false
				},
				inputValue: this.value
			}
		},
		computed: {
			wrapperClass() {
				return this.className
			},
			inputClass() {
				let stateClasses = [];
				if (this.inputState.invalid && this.inputState.initialized) stateClasses.push('-invalid')
				if (this.inputState.filled) stateClasses.push('-filled')
				return stateClasses
			}
		},
		mounted(){
			// init input state if there is some default value for the input
			this.handleEvent(null, 'st-input', true);
		},
		methods: {
			handleEvent(event, type, init=false) {
				// console.log('type >>>', type)
				// console.log('this.type >>>', this.type)
				this.inputState.value = this.inputValue;
				switch(type) {
					case 'st-input':
						
						// console.log('init >>>', init)
						// console.log('this.inputValue >>>', this.inputValue)
						// console.log('this.inputValue.length >>>', this.inputValue.length)
						// console.log('validator >>>', this.validator(this.inputValue, this.validatorParams))

						this.inputState.filled = !!this.inputValue;
						
						if (init) {
							if (this.inputValue) {
								this.inputState.invalid = !this.validator(this.inputValue, this.validatorParams);
								this.inputState.initialized = true;
							}
						} else if (this.inputState.initialized) {
							// console.log('this.inputValue >>>', this.inputValue)
							// console.log('!!this.inputValue >>>', !!this.inputValue)
							// console.log('this.inputState.filled >>>', this.inputState.filled)
							// console.log('this.validator(this.inputValue, this.validatorParams) >>>', this.validator(this.inputValue, this.validatorParams))
							// console.log('!this.reqired ? this.reqired : !this.validator(this.inputValue, this.validatorParams) >>>', !this.required ? this.required : !this.validator(this.inputValue, this.validatorParams))

							if (this.inputState.filled) this.inputState.invalid = !this.validator(this.inputValue, this.validatorParams);
							else this.inputState.invalid = !this.required ? this.required : !this.validator(this.inputValue, this.validatorParams);
							// if (this.inputState.filled)	this.inputState.invalid = !this.validator(this.inputValue, this.validatorParams);
							// else this.inputState.invalid = !this.required ? this.required : !this.validator(this.inputValue, this.validatorParams);
						} else if (!this.inputState.initialized) {
							if (this.inputState.filled && this.validator(this.inputValue, this.validatorParams)) {
								this.inputState.invalid = false;
								this.inputState.initialized = true;
							}
						}		
						break;
					case 'st-focus':
						this.inputState.focused = true;
						break;
					case 'st-blur':
						this.inputState.focused = false;
						this.inputValue = this.formator(this.inputValue);
						this.inputState.value = this.inputValue;
						
						if (!this.inputState.initialized) {
							this.inputState.initialized = true;

							if (this.inputState.filled)	this.inputState.invalid = !this.validator(this.inputValue, this.validatorParams);
							else this.inputState.invalid = !this.required ? this.required : !this.validator(this.inputValue, this.validatorParams);
						}

						break;
				}
				// console.log('this.inputState >>>', this.inputState)
				this.$emit(type, {[this.type]: this.inputState});
			}
		}
	}
</script>