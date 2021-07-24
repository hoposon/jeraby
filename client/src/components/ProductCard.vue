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
		data() {
			return {
				email: ''
			}
		},
		methods: {
			async sendBuyRequest() {
				try {
					await this.sendBuyRequestMethod(this.email);
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
