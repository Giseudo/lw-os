import { storiesOf } from '@storybook/vue'
import LWToolbar from './index'

storiesOf('Organism - lw-toolbar', module)
	.add('default', () => ({
		components: {
			'lw-toolbar': LWToolbar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-toolbar :style="style" :dark="false">
			</lw-toolbar>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-toolbar': LWToolbar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-toolbar :style="style" :dark="true">
			</lw-toolbar>
		`
	}))

