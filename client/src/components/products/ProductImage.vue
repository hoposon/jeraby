<template>
	<div>
		<slot></slot>
		<img
			:src="prodImage.path"
			:alt="prodImage.name"
			class="main-image"
		/>
	</div>
</template>

<script>

	export default {
		props: {
			prodImage: {
				type: Object,
				default: () => {}
			}
		},
		// created() {
		// 	console.log("prodImage >>>>", this.prodImage)
		// }
	}
</script>

<style lang="stylus">
	// .main-image
	// 	height 70vh
</style>