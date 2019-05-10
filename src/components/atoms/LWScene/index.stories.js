import 'three/examples/js/loaders/OBJLoader'
import 'three/examples/js/loaders/FBXLoader'

import { storiesOf } from '@storybook/vue'
import LWScene from './index'
import {
	PointLight,
	Mesh,
	MeshPhongMaterial,
	BoxGeometry,
	TextureLoader
} from 'three'

const loader = new TextureLoader()

storiesOf('Atom - lw-scene', module)
	.add('default', () => ({
		components: {
			'lw-scene': LWScene
		},

		template: `
			<lw-scene
				ref="scene"
				@init="onInit"
				@update="onUpdate"
				@draw="onDraw"
			/>
		`,

		data: () => ({
			light: new PointLight(0xffffff, 1, 10),
			cube: new Mesh(
				new BoxGeometry(2, 2, 2),
				new MeshPhongMaterial()
			)
		}),

		computed: {
			camera() {
				return this.$refs.scene.camera
			},
			scene() {
				return this.$refs.scene.scene
			}
		},

		methods: {
			onInit() {
				this.light.position.z = 3
				this.light.position.y = 1

				this.camera.position.z = 5
				this.scene.add(this.cube)
				this.scene.add(this.light)
			},

			onUpdate() {
				this.cube.rotation.x += 0.01
			},

			onDraw() {
				//
			}
		}
	}))

	.add('orb', () => ({
		components: {
			'lw-scene': LWScene
		},

		template: `
			<lw-scene
				ref="scene"
				background="#1e1828"
				@init="onInit"
				@update="onUpdate"
				@draw="onDraw"
			/>
		`,

		data: () => ({
			light: new PointLight(0xffffff, 1, 700),
			low: null,
			mid: null,
			high: null
		}),

		computed: {
			camera() {
				return this.$refs.scene.camera
			},
			scene() {
				return this.$refs.scene.scene
			}
		},

		methods: {
			onInit() {
				var fbxLoader = new THREE.FBXLoader();

				this.light.position.y = 50
				this.scene.add(this.light)

				/* Load Orb Low object
				fbxLoader.load(
					'/objects/orb/OrbLow.fbx',
					object => {
						this.low = object
						object.position.x = -350
						object.position.z = -450
						object.position.y = -200

						object.traverse(function (child) {
							if (child.isMesh) {
								const oldMat = child.material

								child.material = new MeshPhongMaterial({ 
									color: oldMat.color,
									normalMap: loader.load('/objects/orb/OrbNormal.png')
								})
							}
						})

						this.scene.add(object)
					}
				)*/

				// Load Orb Mid object
				fbxLoader.load(
					'/objects/orb/OrbMid.fbx',
					object => {
						this.mid = object
						object.position.x = -200
						object.position.z = -350
						object.position.y = -200

						object.traverse(function (child) {
							if (child.isMesh) {
								const oldMat = child.material

								child.material = new MeshPhongMaterial({ 
									color: oldMat.color,
									normalMap: loader.load('/objects/orb/OrbNormal.png')
								})
							}
						})

						this.scene.add(object)
					}
				)

				// Load Orb High object
				fbxLoader.load(
					'/objects/orb/OrbHigh.fbx',
					object => {
						this.high = object
						object.position.x = 200
						object.position.z = -350
						object.position.y = -200

						object.traverse(function (child) {
							if (child.isMesh) {
								const oldMat = child.material

								child.material = new MeshPhongMaterial({ 
									color: oldMat.color,
									normalMap: loader.load('/objects/orb/OrbNormal.png')
								})
							}
						})

						this.scene.add(object)
					}
				)

			},

			onUpdate() {
				if (this.low)
					this.low.rotation.y += 0.01

				if (this.mid)
					this.mid.rotation.y += 0.01

				if (this.high)
					this.high.rotation.y += 0.01
			},

			onDraw() {
				//
			}
		}
	}))

