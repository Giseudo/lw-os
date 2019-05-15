<template>
	<div class="lw-program"
		:class="[
			`lw-program--${size}`,
			{
				'is-dark': dark
			}
		]"
		@click="$emit('click', $event)"
	>
		<div class="lw-program__wrapper">
			<lw-icon
				class="lw-program__icon"
				size="xl"
				:name="icon"
			/>
		</div>
		<lw-text class="lw-program__name" type="subhead">
			{{ name }}
		</lw-text>
	</div>
</template>

<script>
import LWIcon from '@/components/atoms/LWIcon'
import LWText from '@/components/atoms/LWText'

export default {
	components: {
		'lw-icon': LWIcon,
		'lw-text': LWText
	},

	props: {
		icon: {
			type: String,
			default: undefined
		},
		name: {
			type: String,
			default: 'Name'
		},
		dark: {
			type: Boolean,
			default: false
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		}
	}
}
</script>

<style lang="scss">
.lw-program{
	background: $c-light-gray;
	padding: 24px;
	cursor: pointer;
	&__wrapper{
		width: 100%;
		background: $c-gray;
		margin-bottom: 24px;
		position: relative;
		&:after{
			content: "";
			padding-top: 100%;
			display: block;
		}
	}
	&__icon{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	&__name{
	}

	&--sm{
		width: 120px;
	}
	&--md{
		width: 200px;
	}
	&--lg{
		width: 300px;
	}

	&.is-dark{
		background: $c-dark-gray;
		.lw-program{
			&__wrapper{
			}
		}
	}
}
</style>
