import { storiesOf } from '@storybook/vue'
import LWProgram from './index'

storiesOf('Atom - lw-program', module)
	.add('default', () => ({
		components: {
			'lw-program': LWProgram,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-program :style="{ margin: '40px' }">
			</lw-program>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-program': LWProgram,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-program :style="{ margin: '40px' }">
			</lw-program>
		`
	}))

