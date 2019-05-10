<template>
  <div id="app" class="lw-app">
    <router-view class="lw-app__view" />
		<lw-taskbar class="lw-app__taskbar" />
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
	&__view{
		flex: 1;
	}
}
</style>
