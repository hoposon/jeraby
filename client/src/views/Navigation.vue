<template>
	<div 
		id="nav"
		class="navigation -w-100"
	>
		<Menu />
		<Burger />
	</div>
</template>

<script>
	import Burger from '../components/nav/Burger.vue';
	import Menu from '../components/nav/Menu.vue';

	export default {
		components: {
			Burger,
			Menu
		},
		data() {
			return {
			}
		}
	}
</script>