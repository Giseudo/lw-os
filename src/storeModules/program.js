import Vue from 'vue'

export const state = {
	programs: {
		explorer: {
			name: 'Explorer',
			state: 'maximized', // maximized | resized,
			minimized: false,
			width: 640,
			height: 480,
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
			size = payload.size

		Vue.set(state.programs[name], 'state', 'resized')
		Vue.set(state.programs[name], 'width', size.width)
		Vue.set(state.programs[name], 'height', size.height)
	},

	maximize(state, name) {
		Vue.set(state.programs[name], 'state', 'maximized')
	},

	minimize(state, name) {
		// Minimize all the programs
		if (name == 'all')
			return state.running.forEach(program => {
				Vue.set(state.programs[program], 'minimized', true)
			})

		// Minimize the program
		Vue.set(state.programs[name], 'minimized', true)
	},

	open(state, name) {
		if (!state.running.includes(name)) {
			state.running.push(name)
		} else {
			Vue.set(state.programs[name], 'minimized', !state.programs[name].minimized)
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

