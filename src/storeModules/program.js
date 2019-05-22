import Vue from 'vue'

export const state = {
	programs: {
		explorer: {
			name: 'Explorer',
			maximized: false,
			suspended: false,
			transform: {
				x: 0,
				y: 0,
				width: 640,
				height: 480,
				rotate: 0,
				scale: 0
			},
			component: require('@/components/templates/LWExplorer').default
		}
	},
	running: [],
	active: null
}

export const getters = {
	getActive(state) {
		return state.active
	},

	getRunning(state) {
		let programs = {}

		state.running.forEach(name => {
			programs[name] = state.programs[name]
		})

		return programs
	}
}

export const mutations = {
	resize(state, payload) {
		let name = payload.name,
			transform = payload.transform

		Vue.set(state.programs[name], 'transform', transform)
	},

	maximize(state, payload) {
		let name = payload.name,
			maximized = payload.maximized

		Vue.set(state.programs[name], 'maximized', maximized)
	},

	suspend(state, name) {
		// Suspend all the programs
		if (name == 'all')
			return state.running.forEach(program => {
				Vue.set(state.programs[program], 'suspended', true)
			})

		// Minimize the program
		Vue.set(state.programs[name], 'suspended', true)
	},

	open(state, name) {
		if (!state.running.includes(name)) {
			state.running.push(name)
		} else {
			Vue.set(state.programs[name], 'suspended', !state.programs[name].suspended)
		}
	},

	close(state, name) {
		let index = state.running.indexOf(name)

		if (index != -1)
			state.running.splice(index, 1)
	}
}

export const actions = {
}

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions
}

