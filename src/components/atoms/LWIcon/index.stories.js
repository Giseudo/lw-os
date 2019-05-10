import { storiesOf } from '@storybook/vue'
import LWBox from '../LWBox'
import LWIcon from './index'

storiesOf('Atom - lw-icon', module)
	.add('icon - sm - default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }">
				<lw-icon size="sm" name="search" :style="style" />
				<lw-icon size="sm" name="gear" :style="style" />
				<lw-icon size="sm" name="minimize" :style="style" />
				<lw-icon size="sm" name="maximize" :style="style" />
				<lw-icon size="sm" name="close" :style="style" />
				<lw-icon size="sm" name="night" :style="style" />
				<lw-icon size="sm" name="brightness" :style="style" />
			</lw-box>
		`
	}))
	.add('icon - md - default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }">
				<lw-icon size="md" name="search" :style="style" />
				<lw-icon size="md" name="gear" :style="style" />
				<lw-icon size="md" name="minimize" :style="style" />
				<lw-icon size="md" name="maximize" :style="style" />
				<lw-icon size="md" name="close" :style="style" />
				<lw-icon size="md" name="night" :style="style" />
				<lw-icon size="md" name="brightness" :style="style" />
			</lw-box>
		`
	}))
	.add('icon - lg - default', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }">
				<lw-icon size="lg" name="search" :style="style" />
				<lw-icon size="lg" name="gear" :style="style" />
				<lw-icon size="lg" name="minimize" :style="style" />
				<lw-icon size="lg" name="maximize" :style="style" />
				<lw-icon size="lg" name="close" :style="style" />
				<lw-icon size="lg" name="night" :style="style" />
				<lw-icon size="lg" name="brightness" :style="style" />
			</lw-box>
		`
	}))
	.add('icon - sm - dark', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }" :dark="true">
				<lw-icon size="sm" name="search" :style="style" :dark="true" />
				<lw-icon size="sm" name="gear" :style="style" :dark="true" />
				<lw-icon size="sm" name="minimize" :style="style" :dark="true" />
				<lw-icon size="sm" name="maximize" :style="style" :dark="true" />
				<lw-icon size="sm" name="close" :style="style" :dark="true" />
				<lw-icon size="sm" name="night" :style="style" :dark="true" />
				<lw-icon size="sm" name="brightness" :style="style" :dark="true" />
			</lw-box>
		`
	}))
	.add('icon - md - dark', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }" :dark="true">
				<lw-icon size="md" name="search" :style="style" :dark="true" />
				<lw-icon size="md" name="gear" :style="style" :dark="true" />
				<lw-icon size="md" name="minimize" :style="style" :dark="true" />
				<lw-icon size="md" name="maximize" :style="style" :dark="true" />
				<lw-icon size="md" name="close" :style="style" :dark="true" />
				<lw-icon size="md" name="night" :style="style" :dark="true" />
				<lw-icon size="md" name="brightness" :style="style" :dark="true" />
			</lw-box>
		`
	}))
	.add('icon - lg - dark', () => ({
		components: {
			'lw-box': LWBox,
			'lw-icon': LWIcon
		},
		data: () => ({
			style: {
				padding: '24px'
			}
		}),
		template: `
			<lw-box :style="{ display: 'flex', justifyContent: 'space-around', margin: '40px' }" :dark="true">
				<lw-icon size="lg" name="search" :style="style" :dark="true" />
				<lw-icon size="lg" name="gear" :style="style" :dark="true" />
				<lw-icon size="lg" name="minimize" :style="style" :dark="true" />
				<lw-icon size="lg" name="maximize" :style="style" :dark="true" />
				<lw-icon size="lg" name="close" :style="style" :dark="true" />
				<lw-icon size="lg" name="night" :style="style" :dark="true" />
				<lw-icon size="lg" name="brightness" :style="style" :dark="true" />
			</lw-box>
		`
	}))
