<template>
	<div class="home">
		<Introduction 
			:className="['__home']"
		>
			<IntroductionHome />
		</Introduction>
		<ProductsList
			:products="products"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import Introduction from '../components/common/Introduction.vue';
import IntroductionHome from '../components/home/IntroductionHome.vue';
import ProductsList from '../components/products/ProductsList.vue';

//

export default {
	name: 'Home',
	components: {
		Introduction,
		IntroductionHome,
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
