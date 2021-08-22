<template>
	<div
		class="box-info"
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