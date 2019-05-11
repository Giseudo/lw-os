<template>
	<div class="lw-toolbar"
		:class="[
			{
				'is-dark': dark
			}
		]"
	>
		<lw-button-icon
			class="lw-toolbar__button lw-toolbar__button--previous"
			size="sm"
			name="angle-left"
			:dark="dark"
		/>

		<lw-button-icon
			class="lw-toolbar__button lw-toolbar__button--parent"
			size="sm"
			name="parent"
			:dark="dark"
		/>

		<lw-input-select
			class="lw-toolbar__address"
			size="sm"
			placeholder="/home/portfolio/urban"
			:dark="dark"
		>
			<lw-option :dark="false">
				Home
			</lw-option>
			<lw-option :dark="false">
				Work
			</lw-option>
			<lw-option :dark="false">
				Tools
			</lw-option>
		</lw-input-select>

		<lw-button-icon
			class="lw-toolbar__button lw-toolbar__button--view"
			size="sm"
			name="grid"
			:dark="dark"
		/>

		<lw-button-icon
			class="lw-toolbar__button lw-toolbar__button--search"
			size="sm"
			name="search"
			:dark="dark"
		/>
	</div>
</template>

<script>
import LWInputSelect from '@/components/molecules/LWInputSelect'
import LWButtonIcon from '@/components/molecules/LWButtonIcon'
import LWOption from '@/components/molecules/LWOption'

export default {
	components: {
		'lw-input-select': LWInputSelect,
		'lw-button-icon': LWButtonIcon,
		'lw-option': LWOption,
	},

	props: {
		dark: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.lw-toolbar{
	display: flex;
	align-items: center;
	&__button{
		margin-right: 8px;
		&:last-child{
			margin-right: 0;
		}
		&--previous{
		}
		&--parent{
		}
		&--view{
		}
		&--search{
		}
	}
	&__address{
		flex: 1;
		margin-right: 8px;
	}

	&.is-dark{
	}
}
</style>
