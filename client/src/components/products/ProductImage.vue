<template>
	<div>
		<img
			:src="prodImage.path"
			:alt="prodImage.name"
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