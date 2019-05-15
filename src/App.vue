<template>
  <div id="app" class="lw-app">
		<div class="lw-app__desktop">
			<lw-program
				class="lw-app__program"
				icon="search"
				name="Explorer"
				@click="$store.commit('program/open', 'explorer')"
			/>

			<lw-window
				class="lw-app__window"
				:class="{ 'is-resized': program.state == 'resized' }"
				v-for="(program, name) in running"
				v-if="!program.minimized"
				:key="name"
				:width="program.width"
				:height="program.height"
				:maximized="program.state == 'maximized'"
				@maximize="onWindowUpdate('maximize', name)"
				@minimize="onWindowUpdate('minimize', name)"
				@resize="onWindowUpdate('resize', name, $event)"
				@close="onWindowUpdate('close', name)"
			>
				<component :is="program.component" />
			</lw-window>
		</div>

		<lw-taskbar
			class="lw-app__taskbar"
			:programs="running"
			@start="$store.commit('program/minimize', 'all')"
			@toggle="$store.commit('program/open', $event)"
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
import LWProgram from '@/components/atoms/LWProgram'

export default {
	components: {
		'lw-taskbar': LWTaskbar,
		'lw-window': LWWindow,
		'lw-post-processing': LWPostProcessing,
		'lw-explorer': LWExplorer,
		'lw-program': LWProgram,
	},

	computed: {
		...mapGetters({
			postProcessing: 'settings/getPostProcessing',
			running: 'program/getRunning'
		})
	},

	data: () => ({
	}),

	mounted() {
	},

	methods: {
		onWindowUpdate(action, name, payload = null) {
			switch (action) {
				case 'minimize':
					this.$store.commit('program/minimize', name)
					break
				case 'maximize':
					this.$store.commit('program/maximize', name)
					break
				case 'close':
					this.$store.commit('program/close', name)
					break
				case 'resize':
					this.$store.commit('program/resize', { name, size: payload })
					break
			}
		},
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
		&.is-resized{
			top: 200px;
			left: 40px;
			right: 200px;
			bottom: 100px;
		}
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
	&__program{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
