<template>
	<div class="lw-window"
		:class="[
			{
				'is-dark': dark
			}
		]"
		:style="style"
	>
		<lw-titlebar
			class="lw-window__titlebar"
			:dark="true"
			:maximized="maximized"
			@maximize="$emit('maximize', $event)"
			@suspend="$emit('suspend')"
			@close="$emit('close')"
		/>

		<div class="lw-window__body">
			<slot>
			</slot>
		</div>
	</div>
</template>

<script>
import interact from 'interactjs'
import LWTitlebar from '@/components/molecules/LWTitlebar'

export default {
	components: {
		'lw-titlebar': LWTitlebar
	},

	props: {
		dark: {
			type: Boolean,
			default: false
		},
		maximized: {
			type: Boolean,
			default: false
		},
		transform: {
			type: Object,
			default: () => ({
				x: 0,
				y: 0,
				width: 640,
				height: 480,
				rotate: 0,
				scale: 0
			})
		}
	},

	computed: {
		style() {
			if (this.maximized)
				return {
					width: '100%',
					height: '100%'
				}
			else
				return {
					transform: `translate(${this.transform.x}px, ${this.transform.y}px`,
					width: `${this.transform.width}px`,
					height: `${this.transform.height}px`
				}
		}
	},

	watch: {
		maximized(value) {
		}
	},

	data: () => ({
		interact: null
	}),

	mounted() {
		this.init()
	},

	destroyed() {
	},

	methods: {
		init() {
			this.interact = interact(this.$el)
				.draggable({
					allowFrom: this.$el.querySelector('.lw-window__titlebar'),
					onmove: this.onDragMove,
					modifiers: [
						interact.modifiers.restrict({
							restriction: 'parent',
							elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
						})
					]
				})
				.resizable({
					edges: { left: false, right: true, bottom: true, top: false },
					modifiers: [
						// keep the edges inside the parent
						interact.modifiers.restrictEdges({
							outer: 'parent',
							elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
						}),
						// minimum size
						interact.modifiers.restrictSize({
							min: { width: 640, height: 480 },
						}),
					],
				})

				.on('resizemove', this.onResizeMove)
		},

		update(x, y, width, height, rotate = 0, scale = 1) {
			this.$emit('resize', {
				x: x ? x : this.transform.x,
				y: y ? y : this.transform.y,
				width: width ? width : this.transform.width,
				height: height ? height : this.transform.height,
				rotate: rotate,
				scale: scale
			})
		},

		onDragMove(event) {
			let target = event.target,
				x = (parseFloat(this.transform.x) || 0) + event.dx,
				y = (parseFloat(this.transform.y) || 0) + event.dy

			this.update(x, y)
		},

		onResizeMove(event) {
			var target = event.target,
				x = this.transform.x,
				y = this.transform.y

			// Get future size
			let width  = event.rect.width,
				height = event.rect.height

			// Translate when resizing from top or left edges
			x += event.deltaRect.left
			y += event.deltaRect.top

			this.update(x, y, width, height)
		}
	}
}
</script>

<style lang="scss">
.lw-window{
	background: rgba($c-light-gray, .75);
	display: flex;
	flex-flow: column;
	touch-action: none;
	box-sizing: border-box;
	&__title-bar{
		flex-shrink: 0;
	}
	&__body{
		min-height: 200px;
		flex: 1;
		padding: 8px;
		display: flex;
	}

	&.is-dark{
		background: rgba($c-dark-gray, .6);
	}
}
</style>
