<template>
	<div class="lw-taskbar">
		<lw-button-icon
			class="lw-taskbar__start"
			name="gear"
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
				icon="gear"
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
		</aside>
	</div>
</template>

<script>
import LWIcon from '@/components/atoms/LWIcon'
import LWButtonIcon from '@/components/molecules/LWButtonIcon'
import LWButtonBar from '@/components/molecules/LWButtonBar'

export default {
	components: {
		'lw-icon': LWIcon,
		'lw-button-icon': LWButtonIcon,
		'lw-button-bar': LWButtonBar
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
	}
	&__running{
		flex: 1;
	}
	&__application{
		margin-right: 8px;
		width: 200px;
	}
	&__divider{
	}
	&__aside{
	}
	&__contrast{
		margin-right: 8px;
	}
}
</style>
