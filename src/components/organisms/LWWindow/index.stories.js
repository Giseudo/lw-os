import { storiesOf } from '@storybook/vue'
import LWWindow from './index'

storiesOf('Organism - lw-window', module)
	.add('default', () => ({
		components: {
			'lw-window': LWWindow,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-window :style="{ margin: '40px' }" :dark="false" />
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-window': LWWindow,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-window :style="{ margin: '40px' }" :dark="true" />
		`
	}))

