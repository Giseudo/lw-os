<template>
	<lw-window class="lw-explorer"
		:dark="dark"
		:class="[
			{
				'is-dark': dark
			}
		]"
	>
		<lw-toolbar class="lw-explorer__toolbar" :dark="dark" />
		<div class="lw-explorer__body">
			<lw-box class="lw-explorer__files" :dark="dark">
				<lw-file :dark="dark" />
				<lw-file :dark="!dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
			</lw-box>

			<aside class="lw-explorer__aside">
				<lw-text type="title">
					Lorem ipsum dolor sit
				</lw-text>
				<div class="lw-explorer__tags">
					<lw-tag v-html="'Frontend'" />
					<lw-tag v-html="'3D'" />
				</div>
				<lw-box class="lw-explorer__description">
					<lw-text>
						Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum.
					</lw-text>
				</lw-box>
			</aside>
		</div>
	</lw-window>
</template>

<script>
import LWWindow from '@/components/organisms/LWWindow'
import LWToolbar from '@/components/organisms/LWToolbar'
import LWBox from '@/components/atoms/LWBox'
import LWTag from '@/components/atoms/LWTag'
import LWText from '@/components/atoms/LWText'
import LWFile from '@/components/molecules/LWFile'

export default {
	components: {
		'lw-window': LWWindow,
		'lw-toolbar': LWToolbar,
		'lw-box': LWBox,
		'lw-file': LWFile,
		'lw-tag': LWTag,
		'lw-text': LWText,
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
.lw-explorer{
	padding-bottom: 2px;
	&__toolbar{
		flex-shrink: 0;
		margin-right: 2px;
	}
	&__body{
		margin-top: 8px;
		display: flex;
		flex-flow: row;
		flex: 1;
		margin-right: 2px;
	}
	&__files{
		flex: 1;
		padding: 8px;
		overflow-y: auto;
		.lw-file{
			margin: 8px;
		}
	}
	&__aside{
		flex: .5;
		max-width: 350px;
		margin-left: 16px;
		padding-top: 32px;
		display: flex;
		flex-flow: column;
	}
	&__tags{
		margin-top: 32px;
	}
	&__description{
		padding: 16px;
		margin-top: 16px;
		flex: .3;
		overflow-y: auto;
	}
	.lw-window{
		&__body{
			padding: 8px;
			display: flex;
			flex-flow: column;
		}
	}

	&.is-dark{
	}
}
</style>
