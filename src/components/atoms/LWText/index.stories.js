import { storiesOf } from '@storybook/vue'
import LWText from './index'

storiesOf('Atom - lw-text', module)
	.add('lead - decoded', () => ({
		components: {
			'lw-text': LWText
		},
		template: `
			<div>
				<lw-text v-decode="60">
					Hello World!
				</lw-text>
				<lw-text v-decode="50">
					How are you guys? :)
				</lw-text>
				<lw-text v-decode="50">
					This is amazing!
				</lw-text>
			</div>
		`
	}))
