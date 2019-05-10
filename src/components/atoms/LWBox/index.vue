<template>
	<div class="lw-box"
		:class="{
			'is-dark': dark,
			'has-elevation': elevation
		}"
	>
	</div>
</template>

<script>
export default {
	props: {
		dark: {
			type: Boolean,
			default: false
		},
		elevation: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<style lang="scss">
.lw-box{
	background: $c-light-gray;
	min-height: 40px;
	&.is-dark{
		background: $c-dark-gray;
	}
	&.has-elevation{
		box-shadow: 2px 2px 0px rgba(black, .2);
	}
}
</style>
