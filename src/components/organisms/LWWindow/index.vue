<template>
	<div class="lw-window"
		:class="[
			{
				'is-dark': dark
			}
		]"
	>
		<lw-titlebar
			class="lw-window__titlebar"
			:dark="true"
			:maximized="maximized"
			@maximize="$emit('maximize')"
			@minimize="$emit('minimize')"
			@resize="$emit('resize', { width: width, height: height })"
			@close="$emit('close')"
		/>
		<div class="lw-window__body">
			<slot>
			</slot>
		</div>
	</div>
</template>

<script>
import LWTitlebar from '@/components/molecules/LWTitlebar'

export default {
	components: {
		'lw-titlebar': LWTitlebar
	},

	props: {
		dark: {
			type: Boolean,
			default: false
		},
		width: {
			type: Number,
			default: 480
		},
		height: {
			type: Number,
			default: 320
		},
		maximized: {
			type: Boolean,
			default: true
		}
	},
}
</script>

<style lang="scss">
.lw-window{
	background: rgba($c-light-gray, .75);
	display: flex;
	flex-flow: column;
	&__title-bar{
		flex-shrink: 0;
	}
	&__body{
		min-height: 200px;
		flex: 1;
		padding: 8px;
		display: flex;
	}

	&.is-dark{
		background: rgba($c-dark-gray, .6);
	}
}
</style>
