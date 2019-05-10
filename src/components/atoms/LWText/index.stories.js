import { storiesOf } from '@storybook/vue'
import LWBox from '@/components/atoms/LWBox'
import LWText from './index'

storiesOf('Atom - lw-text', module)
	.add('body - decoded', () => ({
		components: {
			'lw-text': LWText,
			'lw-box': LWBox
		},
		template: `
			<lw-box :style="{ padding: '24px', margin: '40px' }">
				<lw-text v-decode="60">
					Hello World!
				</lw-text>
				<lw-text v-decode="50">
					How are you guys? :)
				</lw-text>
				<lw-text v-decode="50">
					This is amazing!
				</lw-text>
			</lw-box>
		`
	}))
	.add('title - decoded', () => ({
		components: {
			'lw-text': LWText,
			'lw-box': LWBox
		},
		template: `
			<lw-box :style="{ padding: '24px', margin: '40px' }">
				<lw-text v-decode="60" type="title">
					Hello World!
				</lw-text>
				<lw-text v-decode="50" type="title">
					How are you guys? :)
				</lw-text>
				<lw-text v-decode="50" type="title">
					This is amazing!
				</lw-text>
			</lw-box>
		`
	}))
	.add('caption - default', () => ({
		components: {
			'lw-text': LWText,
			'lw-box': LWBox
		},
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', margin: '40px' }">
				<lw-text type="caption">
					Hello World!
				</lw-text>
				<lw-text type="caption">
					How are you guys? :)
				</lw-text>
				<lw-text type="caption">
					This is amazing!
				</lw-text>
			</lw-box>
		`
	}))
