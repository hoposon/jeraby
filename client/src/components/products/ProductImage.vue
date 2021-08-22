<template>
	<div
		class="box-image"
	>
		<img
			class=""
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
		}
		
	}
</script>