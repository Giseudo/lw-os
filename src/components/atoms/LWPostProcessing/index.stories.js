import { storiesOf } from '@storybook/vue'
import LWPostProcessing from './index'

storiesOf('Atom - lw-post-processing', module)
	.add('sm - default', () => ({
		components: {
			'lw-post-processing': LWPostProcessing,
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-post-processing :style="{ margin: '40px' }">
			</lw-post-processing>
		`
	}))

