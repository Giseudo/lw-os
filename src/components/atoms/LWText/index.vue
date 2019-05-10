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
			default: 'body' // body | small | title
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
	font-family: Roboto, 'Major Mono Display';
	&--body{
		font-size: 16px;
		line-height: 150%;
		letter-spacing: 1.4px;
		word-wrap: break-word;
		font-weight: 400;
	}
	&--small{
		font-size: 14px;
		line-height: 150%;
		letter-spacing: 1px;
		word-wrap: break-word;
		font-weight: 400;
	}
	&--title{
		font-size: 64px;
		font-weight: 200;
		letter-spacing: 3px;
		text-shadow: 4px 4px 0 rgba(black, .1);
	}
	&--caption{
		font-size: 9px;
		font-weight: 600;
		letter-spacing: 4px;
		text-transform: uppercase;
	}

	&.is-dark{
		color: $c-light-gray;
	}
}
</style>
