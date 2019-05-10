<template>
	<div class="lw-scene">
	</div>
</template>

<script>
import {
	Scene,
	Color,
	PerspectiveCamera,
	WebGLRenderer
} from 'three'

export default {
	mounted() {
		this.init()
	},

	destroyed() {
		this.destroy()
	},

	props: {
		background: {
			type: String,
			default: '#182818'
		}
	},

	data: vm => ({
		scene: null,
		renderer: null,
		camera: null,
	}),

	methods: {
		init() {
			let aspect = this.$el.clientWidth / this.$el.clientHeight

			// Create scene
			this.scene = new Scene()

			// Create renderer
			this.renderer = new WebGLRenderer({ antialias: 1, alpha: true })

			// Create & setup camera
			this.camera = new PerspectiveCamera(
				75, aspect, 0.1, 1000
			)

			// Resize renderer and append its dom to body
			this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
			this.$el.appendChild(this.renderer.domElement)
			this.scene.background = new Color(this.background)

			// Resize renderer when browser is resized
			window.addEventListener('resize', this.onResize)

			// Setup game loop
			var loop = () => {
				requestAnimationFrame(loop)
				this.update()
				this.draw()
			}

			// Emit init event
			this.$emit('init')

			// Start game loop
			loop()
		},

		destroy() {
			window.removeEventListener('resize', this.onResize)

			const cleanMaterial = material => {
				material.dispose()

				// dispose textures
				for (const key of Object.keys(material)) {
					const value = material[key]
					if (value && typeof value === 'object' && 'minFilter' in value) {
						console.log('dispose texture!')
						value.dispose()
					}
				}
			}

			// Destroy renderer
			this.renderer.dispose()

			// Destroy objects
			this.scene.traverse(object => {
				if (!object.isMesh) return

				console.log('dispose geometry!')
				object.geometry.dispose()

				if (object.material.isMaterial) {
					cleanMaterial(object.material)
				} else {
					// an array of materials
					for (const material of object.material) cleanMaterial(material)
				}
			})
		},

		update() {
			this.$emit('update') // TODO Emit delta time on update
		},

		draw() {
			this.$emit('draw')
			this.renderer.render(this.scene, this.camera)
		},

		onResize(event) {
			this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight)
			this.camera.aspect = this.$el.clientWidth / this.$el.clientHeight
			this.camera.updateProjectionMatrix()
		}
	}
}
</script>

<style lang="scss">
.lw-scene{
	width: 100%;
	height: 480px;
}
</style>
