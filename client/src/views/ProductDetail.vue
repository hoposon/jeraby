<template>
	<div class="product-detail">
		<!-- <Introduction 
			:className="categoryIntroClass"
		>
			<IntroductionProd
				:categoryName="categoryName"
			/>
		</Introduction> -->
		<div>
			this is product: {{ product[0].productId }}
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
// import Introduction from '../components/common/Introduction.vue';
// import IntroductionProd from '../components/products/IntroductionProd.vue';

export default {
	name: 'ProductDetail',
	components: {
		// Introduction,
		// IntroductionProd
	},
	// props: {
	// 	product: {
	// 		type: Function,
	// 		default: () => {}
	// 	}
	// }
	props: ['product']
}
</script>