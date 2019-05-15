<template>
	<div class="lw-taskbar">
		<lw-button-icon
			class="lw-taskbar__start"
			name="brand"
			icon-size="lg"
			@click="$emit('start', $event)"
		/>

		<div class="lw-taskbar__running">
			<lw-button-bar
				class="lw-taskbar__application"
				icon="search"
				:dark="!program.minimized"
				v-for="(program, name) in programs"
				@click="$emit('toggle', name)"
			>
				{{ program.name }}
			</lw-button-bar>
		</div>

		<aside class="lw-taskbar__aside">
			<lw-button-icon
				class="lw-taskbar__contrast"
				name="brightness"
			/>

			<lw-button-icon
				class="lw-taskbar__language"
				name="grid"
			/>

			<lw-clock
				class="lw-taskbar__clock"
			/>
		</aside>
	</div>
</template>

<script>
import LWIcon from '@/components/atoms/LWIcon'
import LWButtonIcon from '@/components/molecules/LWButtonIcon'
import LWButtonBar from '@/components/molecules/LWButtonBar'
import LWClock from '@/components/molecules/LWClock'

export default {
	components: {
		'lw-icon': LWIcon,
		'lw-button-icon': LWButtonIcon,
		'lw-button-bar': LWButtonBar,
		'lw-clock': LWClock,
	},

	props: {
		programs: {
			type: Object,
			default: () => ({})
		}
	}
}
</script>

<style lang="scss">
.lw-taskbar{
	padding: 8px;
	display: flex;
	align-items: center;
	overflow: hidden;
	&__start{
		flex: 0 100px;
		flex-shrink: 0;
		margin-right: 8px;
	}
	&__running{
		display: flex;
		flex: 1;
		flex-grow: 5;
		flex-shrink: 5;
	}
	&__application{
		margin-right: 8px;
		flex: .2;
		min-width: 0;
		&:last-child{
			margin-right: 0;
		}
	}
	&__divider{
	}
	&__aside{
		display: flex;
		.lw-button-icon{
			margin-right: 8px;
		}
	}
	&__contrast{
	}
}
</style>
