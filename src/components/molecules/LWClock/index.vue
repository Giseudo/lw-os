<template>
	<div class="lw-clock"
		:class="{
			'is-dark': dark
		}"
	>
		<lw-text class="lw-clock__day" type="caption" :dark="dark">
			{{ day }}
		</lw-text>
		<lw-text class="lw-clock__time" type="caption" :dark="dark">
			{{ time }}
		</lw-text>
	</div>
</template>

<script>
import moment from 'moment'
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
	},
	
	data: () => ({
		interval: null,
		day: null,
		time: null
	}),

	mounted() {
		this.update()
		this.interval = setInterval(this.update, 1000)
	},

	destroyed() {
		clearInterval(this.interval)
	},

	methods: {
		update() {
			this.day = moment().format('ddd')
			this.time = moment().format('HH:mm')
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
