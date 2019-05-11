import { storiesOf } from '@storybook/vue'
import LWBox from '@/components/atoms/LWBox'
import LWOption from './index'

storiesOf('Molecule - lw-option', module)
	.add('default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-option': LWOption
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ margin: '40px' }">
				<lw-option :style="style" :dark="false">
					Home
				</lw-option>
				<lw-option :style="style" :dark="false">
					Work
				</lw-option>
				<lw-option :style="style" :dark="false">
					Tools
				</lw-option>
			</lw-box>
		`
	}))
