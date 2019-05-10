<template>
  <div id="app" class="lw-app">
    <router-view class="lw-app__view" />
  </div>
</template>

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
