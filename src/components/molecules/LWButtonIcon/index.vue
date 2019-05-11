<template>
	<button class="lw-button-icon"
		:class="[
			`lw-button-icon--${size}`,
			{
				'is-dark': dark
			}
		]"
		:type="type"
		@click="onClick"
	>
		<lw-box class="lw-button-icon__box" :dark="dark">
			<lw-icon class="lw-button-icon__icon"
				:size="getIconSize"
				:name="name"
				:dark="dark"
			/>
		</lw-box>
	</button>
</template>

<script>
import LWBox from '@/components/atoms/LWBox'
import LWIcon from '@/components/atoms/LWIcon'

export default {
	components: {
		'lw-box': LWBox,
		'lw-icon': LWIcon
	},

	props: {
		type: {
			type: String,
			default: 'button' // type | submit
		},
		size: {
			type: String,
			default: 'md' // sm | md | lg
		},
		iconSize: {
			type: String,
			default: null // sm | md | lg
		},
		name: {
			type: String,
			default: undefined
		},
		dark: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		getIconSize() {
			return this.iconSize || (this.size == 'lg' ? 'md' : 'sm')
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
.lw-button-icon{
	background: transparent;
	border: 0;
	position: relative;
	cursor: pointer;
	outline: none;
	&__box{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	&__icon{
	}
	&--sm{
		width: 28px;
		height: 28px;
	}
	&--md{
		width: 36px;
		height: 36px;
	}
	&--lg{
		width: 48px;
		height: 48px;
	}

	&:hover,
	&:focus{
		transform: translate(-1px, -1px);
		.lw-button-icon{
			&__box{
				box-shadow: 3px 3px 0px rgba(black, .2);
			}
		}
	}
	&:active{
		transform: translate(0, 0);
		.lw-button-icon{
			&__box{
				box-shadow: 2px 2px 0px rgba(black, .2);
			}
		}
	}

	&.is-dark{
	}
}
</style>
