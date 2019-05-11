<template>
	<div class="lw-taskbar">
		<lw-button-icon
			class="lw-taskbar__start"
			name="brand"
			icon-size="lg"
		/>

		<lw-icon class="lw-taskbar__divider" name="divider" />

		<div class="lw-taskbar__running">
			<lw-button-bar
				class="lw-taskbar__application"
				icon="search"
				:dark="true"
			>
				Explorer
			</lw-button-bar>
			<lw-button-bar
				class="lw-taskbar__application"
				icon="console"
			>
				Console
			</lw-button-bar>
		</div>

		<lw-icon class="lw-taskbar__divider" name="divider" />

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
	}
}
</script>

<style lang="scss">
.lw-taskbar{
	padding: 8px;
	display: flex;
	align-items: center;
	&__start{
		width: 80px !important;
		flex-shrink: 0;
	}
	&__running{
		flex: 1;
		display: flex;
	}
	&__application{
		margin-right: 8px;
		flex: .2;
		min-width: 160px;
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
