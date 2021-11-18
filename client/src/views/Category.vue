<template>
	<div class="home">
		<Introduction 
			:className="categoryIntroClass"
		>
			<IntroductionProd
				:categoryName="categoryName"
			/>
		</Introduction>
		<ProductsList
			:products="products"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import Introduction from '../components/common/Introduction.vue';
import IntroductionProd from '../components/products/IntroductionProd.vue';
import ProductsList from '../components/products/ProductsList.vue';

//

export default {
	name: 'Home',
	components: {
		Introduction,
		IntroductionProd,
		ProductsList
	},
	props: {
		products: {
			type: Array,
			default: () => []
		},
		categoryName: {
			type: String,
			default:''
		},
		categoryIntroClass: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="stylus">
	.introduction
		&.__home
			background-color whitesmoke
			background-image url('../assets/home-jerab.png')
			background-repeat no-repeat
			background-size 25%
			background-position 83% 67%
			background-attachment fixed
		
</style>
