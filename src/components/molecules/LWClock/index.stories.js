import { storiesOf } from '@storybook/vue'
import LWClock from './index'

storiesOf('Molecule - lw-clock', module)
	.add('default', () => ({
		components: {
			'lw-clock': LWClock
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-clock :style="style" :dark="false">
			</lw-clock>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-clock': LWClock
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-clock :style="style" :dark="true">
			</lw-clock>
		`
	}))

