import { storiesOf } from '@storybook/vue'
import LWButtonBar from './index'

storiesOf('Molecule - lw-button-bar', module)
	.add('default', () => ({
		components: {
			'lw-button-bar': LWButtonBar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-button-bar :style="style" />
		`
	}))

