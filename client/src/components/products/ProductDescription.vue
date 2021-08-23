<template>
	<div
		class="product__main-description"
	>
		{{translate(product.productName)}}
	</div>
</template>

<script>

	export default {
		props: {
			product: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>