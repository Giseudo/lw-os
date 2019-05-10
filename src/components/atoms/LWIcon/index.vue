<template>
	<div class="lw-icon icon"
		:class="[
			`lw-icon--${size}`,
			`icon-${name}`,
			{
				'is-dark': dark
			}
		]"
	>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'md'
		},
		name: {
			type: String,
			default: 'close'
		},
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.lw-icon{
	line-height: 70%;
	color: $c-dark-gray;
	&--sm{
		font-size: 18px;
	}
	&--md{
		font-size: 24px;
	}
	&--lg{
		font-size: 32px;
	}
	&.is-dark{
		color: $c-light-gray;
	}
}
</style>
