<template>
	<span
		class="lw-text"
		:class="[
			`lw-text--${type}`
		]"
	>
		<slot></slot>
	</span>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: 'body'
		}
	}
}
</script>

<style lang="scss">
.lw-text{
	display: block;
	&--body{
		font-size: 42px;
		font-family: 'Roboto Mono', 'Major Mono Display';
		word-wrap: break-word;
	}
}
</style>
