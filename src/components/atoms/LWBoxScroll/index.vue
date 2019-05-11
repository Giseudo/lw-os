<template>
	<lw-box class="lw-box-scroll">
		<div class="lw-box-scroll__container swiper-container">
			<div class="lw-box-scroll__wrapper swiper-wrapper">
				<div class="lw-box-scroll__slide swiper-slide">
					<slot></slot>
				</div>
			</div>
		</div>
		<div class="lw-box-scroll__scrollbar"></div>
	</lw-box>
</template>

<script>
import LWBox from '@/components/atoms/LWBox'
import Swiper from 'swiper'

export default {
	components: {
		'lw-box': LWBox
	},

	data: () => ({
		swiper: null
	}),

	mounted() {
		this.init()
	},

	destroyed() {
		this.destroy()
	},

	methods: {
		init() {
			this.swiper = new Swiper(this.$el.querySelector('.lw-box-scroll__container'), {
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: true,
				autoHeight: true,
				scrollbar: {
					el: this.$el.querySelector('.lw-box-scroll__scrollbar'),
					hide: false
				},
				mousewheel: true
			})
		},

		destroy() {
		}
	}
}
</script>

<style lang="scss">
.lw-box-scroll{
	display: flex;
	flex-flow: column;
	position: relative;
	padding: 2px 0;
	&:before{
		content: "";
		position: absolute;
		width: 4px;
		height: 4px;
		bottom: 2px;
		right: 6px;
		background: $c-dark-gray;
	}
	&__container{
		width: 100%;
		flex: 1;
		position: relative;
		&:before,
		&:after{
			content: "";
			position: absolute;
			left: 0;
			right: 16px;
			height: 2px;
			z-index: 5;
			background: $c-gray;
		}
		&:before{
			top: 0px;
		}
		&:after{
			bottom: 0px;
		}
	}
	&__wrapper{
	}
	&__slide{
		height: auto !important;
		padding-right: 16px;
		box-sizing: border-box;
	}
	&__scrollbar{
		width: 4px;
		top: 2px;
		right: 6px;
		bottom: 10px;
		position: absolute;
		overflow: hidden;
		.swiper-scrollbar-drag{
			border-radius: 0;
			background: $c-dark-gray;
		}
	}
}
</style>
