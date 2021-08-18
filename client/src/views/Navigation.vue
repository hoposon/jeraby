<template>
	<div 
		id="nav"
		class="navigation -w-100"
	>
		<Menu />
		<Burger />
		<!-- <router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> -->
	</div>
</template>

<script>
	import Burger from '../components/nav/Burger.vue';
	import Menu from '../components/nav/Menu.vue';

	export default {
		components: {
			Burger,
			Menu
		}
		
	}
</script>