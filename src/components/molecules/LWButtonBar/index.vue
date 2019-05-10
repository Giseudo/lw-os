<template>
	<button class="lw-button-bar"
		:class="{
			'is-dark': dark
		}"
	>
		<lw-box class="lw-button-bar__box" :dark="dark">
			<lw-icon
				class="lw-button-bar__icon"
				size="sm"
				:name="icon"
				:dark="true"
			/>
			<lw-text
				class="lw-button-bar__label"
				type="small"
				:dark="dark"
			>
				<slot>
					Label
				</slot>
			</lw-text>
		</lw-box>
	</button>
</template>

<script>
import LWBox from '@/components/atoms/LWBox'
import LWIcon from '@/components/atoms/LWIcon'
import LWText from '@/components/atoms/LWText'

export default {
	components: {
		'lw-box': LWBox,
		'lw-icon': LWIcon,
		'lw-text': LWText
	},

	props: {
		dark: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: undefined
		}
	}
}
</script>

<style lang="scss">
.lw-button-bar{
	background: transparent;
	border: 0;
	margin: 0;
	padding: 0;
	&__box{
		height: 38px;
		display: flex;
		align-items: center;
		padding: 0 5px;
	}
	&__icon{
		width: 28px;
		height: 28px;
		background: $c-dark-gray;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 8px;
	}
	&__label{
		margin-right: 8px;
	}

	&.is-dark{
	}
}
</style>
