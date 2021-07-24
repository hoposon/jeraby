<template>

</template>

<script>
	

export default {
	name: 'App',
	components: {
		HelloWorld
	},
	created() {
		// Parse.initialize('D1GxqolYkhpwXoIasj6u0mhyZBf39w832PB39kyh', 'hK1irYeW2s7uJ0PhrQhWwTmyaduaLScLfTnvEO6k');
		// Parse.serverURL = "https://parseapi.back4app.com/";

		// var user = new Parse.User();
		// user.save({
		// 	username: "Lukas",
		// 	email: "lukas.houf@gmail.com",
		// 	password: "hesloHesl0"
		// }).then(function(response) {
		// 	alert('New object create with success! ObjectId: ' + response.id + ', '+ user.get('username'));
		// }).catch(function(error) {
		// 	alert('Error: ' + error.message);
		// });	
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
