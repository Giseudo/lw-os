<template>
  <div id="app" class="lw-app">
		<div class="lw-app__desktop">
			<router-view
				class="lw-app__view"
			/>
		</div>

		<lw-taskbar
			class="lw-app__taskbar"
		/>
  </div>
</template>

<script>
import LWTaskbar from '@/components/organisms/LWTaskbar'

export default {
	components: {
		'lw-taskbar': LWTaskbar
	}
}
</script>

<style lang="scss">
html{
	height: 100%;
}
body{
	background: $c-gray;
	height: 100%;
}

.lw-app{
	height: 100%;
	display: flex;
	flex-flow: column;
	&__desktop{
		flex: 1;
		position: relative;
	}
	&__view{
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
	}
}
</style>
