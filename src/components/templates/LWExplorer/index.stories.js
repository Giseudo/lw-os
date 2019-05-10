import { storiesOf } from '@storybook/vue'
import LWExplorer from './index'

storiesOf('Template - lw-explorer', module)
	.add('default', () => ({
		components: {
			'lw-explorer': LWExplorer,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-explorer :style="{ margin: '40px' }" :dark="false" />
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-explorer': LWExplorer,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-explorer :style="{ margin: '40px' }" :dark="true" />
		`
	}))

