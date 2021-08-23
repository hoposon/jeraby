<template>
	<img
		class="product__main-image"
		:src="prodImage.path"
		:alt="prodImage.name"
	/>
</template>

<script>

	export default {
		props: {
			prodImage: {
				type: Object,
				default: () => {}
			}
		},
		created() {
			console.log("prodImage >>>>", this.prodImage)
		}
	}
</script>