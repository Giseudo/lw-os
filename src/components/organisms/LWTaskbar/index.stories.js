import { storiesOf } from '@storybook/vue'
import LWTaskbar from './index'

storiesOf('Template - lw-taskbar', module)
	.add('default', () => ({
		components: {
			'lw-taskbar': LWTaskbar,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-taskbar :style="{ margin: '40px' }" :dark="false" />
		`
	}))

