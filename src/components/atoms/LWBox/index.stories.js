import { storiesOf } from '@storybook/vue'
import LWBox from './index'

storiesOf('Atom - lw-box', module)
	.add('box - default', () => ({
		components: {
			'lw-box': LWBox
		},
		template: `
			<lw-box :style="{ height: '300px', margin: '24px' }" />
		`
	}))
	.add('box - dark', () => ({
		components: {
			'lw-box': LWBox
		},
		template: `
			<lw-box :dark="true" :style="{ height: '300px', margin: '24px' }" />
		`
	}))
