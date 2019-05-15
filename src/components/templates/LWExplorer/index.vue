<template>
	<div class="lw-explorer"
		:dark="dark"
		:class="[
			{
				'is-dark': dark
			}
		]"
	>
		<lw-toolbar class="lw-explorer__toolbar" :dark="dark" />
		<div class="lw-explorer__body">
			<lw-box-scroll class="lw-explorer__files" :dark="dark">
				<lw-file :dark="dark" />
				<lw-file :dark="!dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
				<lw-file :dark="dark" />
			</lw-box-scroll>

			<aside class="lw-explorer__aside">
				<lw-text type="title">
					Lorem ipsum dolor sit
				</lw-text>
				<div class="lw-explorer__tags">
					<lw-tag v-html="'Frontend'" />
					<lw-tag v-html="'3D'" />
				</div>
				<lw-box-scroll class="lw-explorer__description">
					<lw-text class="lw-explorer__content">
						Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum. Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum. Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum. Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum. Dolor placeat dolore alias impedit voluptas excepturi ab impedit rerum. 
					</lw-text>
				</lw-box-scroll>
			</aside>
		</div>
	</div>
</template>

<script>
import LWToolbar from '@/components/organisms/LWToolbar'
import LWBoxScroll from '@/components/atoms/LWBoxScroll'
import LWTag from '@/components/atoms/LWTag'
import LWText from '@/components/atoms/LWText'
import LWFile from '@/components/molecules/LWFile'

export default {
	components: {
		'lw-toolbar': LWToolbar,
		'lw-box-scroll': LWBoxScroll,
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
	padding-bottom: 4px;
	display: flex;
	flex-flow: column;
	box-sizing: border-box;
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
		height: 100%;
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
		overflow: hidden;
	}
	&__tags{
		margin-top: 32px;
	}
	&__description{
		min-height: 200px;
		margin-top: 16px;
		flex: .4;
	}
	&__content{
		padding: 16px;
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
