import { storiesOf } from '@storybook/vue'
import LWTitleBar from './index'

storiesOf('Molecule - lw-title-bar', module)
	.add('lw-title-bar - default', () => ({
		components: {
			'lw-title-bar': LWTitleBar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-title-bar :style="style" />
		`
	}))

	.add('lw-title-bar - dark', () => ({
		components: {
			'lw-title-bar': LWTitleBar
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-title-bar :dark="true" :style="style" />
		`
	}))

