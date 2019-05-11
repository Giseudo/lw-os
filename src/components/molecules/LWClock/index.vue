<template>
	<div class="lw-clock"
		:class="{
			'is-dark': dark
		}"
	>
		<lw-text class="lw-clock__day" type="caption" :dark="dark">
			Sat
		</lw-text>
		<lw-text class="lw-clock__time" type="caption" :dark="dark">
			16:10
		</lw-text>
	</div>
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
.lw-clock{
	display: flex;
	flex-flow: column;
	align-items: center;
	justify-content: center;
	height: 38px;
	width: 160px;
	background: $c-light-gray;
	&__day{
		transform: scale(.9) translateY(-3px);
	}
	&__time{
		transform: scale(1.5) translateY(-2px);
	}

	&.is-dark{
		background: $c-dark-gray;
	}
}
</style>
