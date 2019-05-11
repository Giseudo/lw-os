<template>
	<lw-box class="lw-file"
		:dark="dark"
		:class="[
			{}
		]"
		tabindex="0"
		@click.native="onClick"
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
	},

	methods: {
		onClick(event) {
			this.$emit('click', event)
			this.$el.blur()
		}
	}
}
</script>

<style lang="scss">
.lw-file{
	padding: 8px;
	display: inline-flex;
	flex-flow: column;
	cursor: pointer;
	outline: none;
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
	&:hover,
	&:focus{
		transform: translate(-1px, -1px);
		box-shadow: 3px 3px 0px rgba(black, .2);
	}
	&:active{
		transform: translate(0, 0);
		box-shadow: 2px 2px 0px rgba(black, .2);
	}
}
</style>
