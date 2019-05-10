import { storiesOf } from '@storybook/vue'
import LWBox from '@/components/atoms/LWBox'
import LWFile from './index'

storiesOf('Molecule - lw-file', module)
	.add('default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-file': LWFile
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '40px', padding: '24px' }" :dark="true">
				<lw-file :style="style" />
				<lw-file :style="style" />
				<lw-file :style="style" />
				<lw-file :style="style" />
				<lw-file :style="style" />
				<lw-file :style="style" />
			</lw-box>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-box': LWBox,
			'lw-file': LWFile
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '40px', padding: '24px' }" :dark="false">
				<lw-file :style="style" :dark="true" />
				<lw-file :style="style" :dark="true" />
				<lw-file :style="style" :dark="true" />
				<lw-file :style="style" :dark="true" />
				<lw-file :style="style" :dark="true" />
				<lw-file :style="style" :dark="true" />
			</lw-box>
		`
	}))

