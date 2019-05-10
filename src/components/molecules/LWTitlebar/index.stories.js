import { storiesOf } from '@storybook/vue'
import LWTitlebar from './index'

storiesOf('Molecule - lw-titlebar', module)
	.add('default', () => ({
		components: {
			'lw-titlebar': LWTitlebar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-titlebar :style="style" />
		`
	}))

	.add('dark', () => ({
		components: {
			'lw-titlebar': LWTitlebar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-titlebar :dark="true" :style="style" />
		`
	}))

