import { storiesOf } from '@storybook/vue'
import LWInputSelect from './index'

storiesOf('Molecule - lw-input-select', module)
	.add('default', () => ({
		components: {
			'lw-input-select': LWInputSelect
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-input-select size="sm" :style="style" :dark="false">
			</lw-input-select>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-input-select': LWInputSelect
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-input-select size="sm" :style="style" :dark="true">
			</lw-input-select>
		`
	}))

