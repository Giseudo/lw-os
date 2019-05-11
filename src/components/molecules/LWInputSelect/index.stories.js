import { storiesOf } from '@storybook/vue'
import LWOption from '@/components/molecules/LWOption'
import LWInputSelect from './index'

storiesOf('Molecule - lw-input-select', module)
	.add('default', () => ({
		components: {
			'lw-option': LWOption,
			'lw-input-select': LWInputSelect
		},
		data: () => ({
			style: {
				margin: '40px'
			}
		}),
		template: `
			<lw-input-select size="sm" :style="style" :dark="false">
				<lw-option :dark="false">
					Home
				</lw-option>
				<lw-option :dark="false">
					Work
				</lw-option>
				<lw-option :dark="false">
					Tools
				</lw-option>
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

