<template>
	<lw-text class="lw-tag"
		type="caption"
		:dark="!dark"
	>
		<slot>
		</slot>
	</lw-text>
</template>

<script>
import LWText from '@/components/atoms/LWText'

export default {
	components: {
		'lw-text': LWText
	},

	props: {
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.lw-tag{
	padding: 2px 4px;
	display: inline-block;
	background: $c-light-gray;
	margin-right: 4px;
	&.is-dark{
		background: $c-dark-gray;
	}
}
</style>
