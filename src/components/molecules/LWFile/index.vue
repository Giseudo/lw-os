<template>
	<lw-box class="lw-file"
		:dark="dark"
		:class="[
			{}
		]"
	>
		<div class="lw-file__preview">
		</div>
		<lw-text :dark="dark">
			{{ label }}
		</lw-text>
	</lw-box>
</template>

<script>
import LWBox from '@/components/atoms/LWBox'
import LWText from '@/components/atoms/LWText'

export default {
	components: {
		'lw-box': LWBox,
		'lw-text': LWText
	},

	props: {
		label: {
			type: String,
			default: 'Name'
		},
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.lw-file{
	padding: 8px;
	display: inline-flex;
	flex-flow: column;
	&__preview{
		background: $c-gray;
		width: 112px;
		height: 112px;
		margin-bottom: 8px;
	}
	&.is-dark{
		.lw-file{
			&__preview{
				background: $c-light-gray;
			}
		}
	}
}
</style>
