<template>
	<span
		class="lw-text"
		:class="[
			`lw-text--${type}`,
			{
				'is-dark': dark
			}
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
			default: 'body' // body | title
		},
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.lw-text{
	display: block;
	color: $c-dark-gray;
	&--body{
		font-size: 16px;
		line-height: 150%;
		letter-spacing: 1.4px;
		font-family: Roboto, 'Major Mono Display';
		word-wrap: break-word;
		font-weight: 400;
	}

	&.is-dark{
		color: $c-light-gray;
	}
}
</style>
