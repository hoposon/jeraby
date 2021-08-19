<template>
	<div class="home">
		<Introduction />
		<ProductsList
			:products="products"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import Introduction from '../components/home/Introduction.vue';
import ProductsList from '../components/products/ProductsList.vue';

//

export default {
	name: 'Home',
	components: {
		Introduction,
		ProductsList
	},
	props: {
		products: {
			type: Array,
			default: () => []
		}
	}
}
</script>
