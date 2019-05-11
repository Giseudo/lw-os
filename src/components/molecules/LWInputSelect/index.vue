<template>
	<div class="lw-input-select"
		:class="[
			`lw-input-select--${size}`,
			{
				'is-dark': dark
			}
		]"
		tabindex="0"
		@focus="active = true"
		@blur="active = false"
	>
		<div class="lw-input-select__wrapper">
			<lw-text class="lw-input-select__value" :dark="dark" type="small">
				{{ value || placeholder }}
			</lw-text>

			<lw-icon
				class="lw-input-select__icon"
				name="angle-down"
				size="sm"
				:dark="dark"
			/>
		</div>

		<lw-box class="lw-input-select__dropdown" v-if="active">
			<slot></slot>
		</lw-box>
	</div>
</template>

<script>
import LWText from '@/components/atoms/LWText'
import LWIcon from '@/components/atoms/LWIcon'
import LWBox from '@/components/atoms/LWBox'

export default {
	components: {
		'lw-text': LWText,
		'lw-icon': LWIcon,
		'lw-box': LWBox,
	},

	props: {
		value: {
			type: String,
			default: null
		},
		placeholder: {
			type: String,
			default: 'Select an option'
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		},
		dark: {
			type: Boolean,
			default: false
		}
	},

	data: () => ({
		active: false
	})
}
</script>

<style lang="scss">
.lw-input-select{
	position: relative;
	outline: none;
	&__wrapper{
		background: $c-light-gray;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		cursor: pointer;
	}
	&__value{
		flex: 1;
	}
	&__icon{
	}
	&__dropdown{
		position: absolute;
		top: 100%;
		width: 100%;
		z-index: 20;
	}

	&--sm{
		.lw-input-select{
			&__wrapper{
				height: 28px;
				padding: 8px;
			}
		}
	}
	&--md{
	}
	&--lg{
	}

	&.is-dark{
		.lw-input-select{
			&__wrapper{
				background: $c-dark-gray;
			}
		}
	}
}
</style>
