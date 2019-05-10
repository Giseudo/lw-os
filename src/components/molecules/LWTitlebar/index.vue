<template>
	<div class="lw-titlebar"
		:class="[
			{
				'is-dark': dark
			}
		]"
	>
		<div class="lw-titlebar__column">
			<lw-icon
				class="lw-titlebar__icon"
				size="sm"
				:name="icon"
				:dark="true"
			/>
			<lw-text
				class="lw-titlebar__title"
				:dark="dark"
			>
				{{ title }}
			</lw-text>
		</div>

		<div class="lw-titlebar__column">
			<lw-icon
				class="lw-titlebar__button"
				name="minimize"
				size="sm"
				:dark="dark"
			/>
			<lw-icon
				class="lw-titlebar__button"
				name="maximize"
				size="sm"
				:dark="dark"
			/>
			<lw-icon
				class="lw-titlebar__button"
				name="close"
				size="sm"
				:dark="dark"
			/>
		</div>
	</div>
</template>

<script>
import LWText from '@/components/atoms/LWText'
import LWIcon from '@/components/atoms/LWIcon'

export default {
	components: {
		'lw-text': LWText,
		'lw-icon': LWIcon
	},

	props: {
		title: {
			type: String,
			default: 'Window'
		},
		dark: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			default: 'search'
		}
	}
}
</script>

<style lang="scss">
.lw-titlebar{
	height: 38px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: $c-light-gray;
	padding: 5px 8px;
	box-sizing: border-box;
	&__column{
		display: flex;
		align-items: center;
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
	&__title{
	}
	&__button{
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 8px;
		cursor: pointer;
		&:hover{
			text-shadow: 2px 2px 0 rgba(black, .2);
			transform: translate(-1px, -1px);
		}
	}

	&.is-dark{
		background: $c-dark-gray;
	}
}
</style>
