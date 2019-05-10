import { storiesOf } from '@storybook/vue'
import LWBox from '@/components/atoms/LWBox'
import LWTag from './index'

storiesOf('Atom - lw-tag', module)
	.add('default', () => ({
		components: {
			'lw-tag': LWTag,
			'lw-box': LWBox
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'flex-start', padding: '24px', margin: '40px' }">
				<lw-tag :style="style" :dark="false">
					Frontend
				</lw-tag>
				<lw-tag :style="style" :dark="false">
					3D
				</lw-tag>
				<lw-tag :style="style" :dark="false">
					Shader
				</lw-tag>
			</lw-box>
		`
	}))
	.add('dark', () => ({
		components: {
			'lw-tag': LWTag,
			'lw-box': LWBox
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'flex-start', padding: '24px', margin: '40px' }" :dark="true">
				<lw-tag :style="style" :dark="true">
					Frontend
				</lw-tag>
				<lw-tag :style="style" :dark="true">
					3D
				</lw-tag>
				<lw-tag :style="style" :dark="true">
					Shader
				</lw-tag>
			</lw-box>
		`
	}))

