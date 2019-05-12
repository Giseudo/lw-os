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
		}
	}
}
</script>

<style lang="scss">
.lw-window{
	background: rgba($c-light-gray, .5);
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
		background: rgba($c-dark-gray, .5);
	}
}
</style>
