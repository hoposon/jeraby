<template>
	<div
		class="navigation__burger"
	>
		<input type="checkbox" id="menu_checkbox">
		<label for="menu_checkbox">
		<div></div>
		<div></div>
		<div></div>
		</label>
	</div>
</template>

<style lang="stylus">
	/*body
	{
		-webkit-tap-highlight-color transparent 
	}*/

	#menu_checkbox
		display none

	label
		display block
		width 30px
		height 30px
		cursor pointer

	label div
		position relative
		height 6px
		background-color #fff
		margin-bottom 6px
		transition 0.3s ease transform, 0.3s ease top, 0.3s ease width, 0.3s ease right
		border-radius 2px

	label div:first-child
		top 0
		transform-origin 0

	label div:last-child
		top 0
		margin-bottom 0
		transform-origin 30px

	label div:nth-child(2)
		width 30px
		transform-origin center

	#menu_checkbox:checked + label div:first-child
		top -3px
		transform rotateZ(45deg)

	#menu_checkbox:checked + label div:last-child
		top 3px
		transform rotateZ(45deg)

	#menu_checkbox:checked + label div:nth-child(2)
		width 41px
		right 5px
		transform rotateZ(-45deg)

</style>