import { storiesOf } from '@storybook/vue'
import LWBox from '@/components/atoms/LWBox'
import LWButtonIcon from './index'

storiesOf('Molecule - lw-button-icon', module)
	.add('icon - default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-button-icon': LWButtonIcon
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '40px', padding: '24px' }" :dark="true">
				<lw-button-icon size="sm" name="search" :style="style" />
				<lw-button-icon size="md" name="search" :style="style" />
				<lw-button-icon size="lg" name="search" :style="style" />
			</lw-box>
		`
	}))
	.add('icon - dark', () => ({
		components: {
			'lw-box': LWBox,
			'lw-button-icon': LWButtonIcon
		},
		data: () => ({
			style: {
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', margin: '40px', padding: '24px' }" :dark="false">
				<lw-button-icon size="sm" name="search" :style="style" :dark="true" />
				<lw-button-icon size="md" name="search" :style="style" :dark="true" />
				<lw-button-icon size="lg" name="search" :style="style" :dark="true" />
			</lw-box>
		`
	}))

