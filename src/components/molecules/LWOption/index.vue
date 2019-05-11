<template>
	<button class="lw-option"
		:class="{
			'is-dark': dark
		}"
	>
		<div class="lw-option__wrapper">
			<lw-icon class="lw-option__icon" :icon="icon" size="sm" />
			<lw-text class="lw-option__label" type="body" :dark="dark">
				<slot></slot>
			</lw-text>
		</div>
	</button>
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
.lw-option{
	background: $c-light-gray;
	position: relative;
	border: 0;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	cursor: pointer;
	width: 100%;
	height: 40px;
	outline: none;
	padding: 0;
	z-index: 5;
	&:before,
	&:after{
		content: "";
		position: absolute;
		width: 0%;
		height: 2px;
		transition: .1s $easeInQuad;
		background: $c-dark-gray;
		z-index: 10;
	}
	&:before{
		top: 0;
	}
	&:after{
		bottom: 0;
	}
	&:hover{
		&:before,
		&:after{
			width: 100%;
			transition: .4s $easeInOutQuad .4s;
		}
		.lw-option{
			&__wrapper:before{
				width: 100%;
				transition: .3s $easeInQuad .2s;
			}
			&__icon,
			&__label{
				color: $c-light-gray;
				transition: .05s linear .3s;
			}
		}
	}
	&__wrapper{
		width: 100%;
		height: 32px;
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 4px;
		&:before{
			content: "";
			position: absolute;
			width: 0%;
			height: 100%;
			left: 0;
			background: $c-dark-gray;
			transition: .2s $easeOutQuad;
			z-index: -1;
		}
	}
	&__icon{
		width: 28px;
		height: 28px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 4px;
	}
	&__icon,
	&__label{
		transition: .05s linear .2s;
	}

	&.is-dark{
	}
}
</style>
