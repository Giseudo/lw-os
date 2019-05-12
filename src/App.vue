<template>
  <div id="app" class="lw-app">
		<div class="lw-app__desktop">
			<lw-window class="lw-app__window" v-if="explorer">
				<lw-explorer />
			</lw-window>
		</div>

		<lw-taskbar
			class="lw-app__taskbar"
			:running="applications"
			@click.native="explorer = !explorer"
		/>

		<lw-post-processing
			v-if="postProcessing"
			class="lw-app__post-processing"
		/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LWTaskbar from '@/components/organisms/LWTaskbar'
import LWPostProcessing from '@/components/atoms/LWPostProcessing'
import LWWindow from '@/components/organisms/LWWindow'
import LWExplorer from '@/components/templates/LWExplorer'

export default {
	components: {
		'lw-taskbar': LWTaskbar,
		'lw-window': LWWindow,
		'lw-post-processing': LWPostProcessing,
		'lw-explorer': LWExplorer,
	},

	computed: {
		...mapGetters({
			postProcessing: 'settings/getPostProcessing',
			applications: 'system/getApplications'
		})
	},

	data: () => ({
		explorer: false
	}),

	mounted() {
		this.$store.commit('system/execute', { name: 'explorer' })
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
	&__window{
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		display: flex;
		flex-flow: column;
	}
	&__view{
		flex: 1;
	}
	&__post-processing{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
	}
}
</style>
