<template>
	<form @submit.prevent="sendBuyRequest()">
		<input
			type="text"
			:v-model="email"
		/>
		<input
			type="submit"
			value="Odeslat"
		/>
	</form>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		props: {
			product: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				email: ''
			}
		},
		methods: {
			async sendBuyRequest() {
				try {
					await this.sendBuyRequestMethod({email: this.email, product: this.product});
				} catch (e) {
					console.log(e);
				}
				
			},
			...mapActions([
				'sendBuyRequestMethod'
			])
		}
	}
</script>
