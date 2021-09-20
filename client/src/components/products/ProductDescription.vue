<template>
	<div
		ref="description"
		class="-pad-20"
	>
		<h1>
			{{translate(product.productName)}}
		</h1>
		<div>
			{{translate(product.main.description)}}
		</div>
	</div>
</template>

<script>

	export default {
		props: {
			product: {
				type: Object,
				default: () => {}
			}
		},
		mounted() {
			for (const key in this.product.main.descStyle) {
				console.log('key >>>', key)
				this.$refs['description'].style[key] = this.product.main.descStyle[key];
			}
		}
	}
</script>