export const state = {
	// Set the current path
	path: null,

	// Current directory
	current: {},

	// The user trajectory
	history: [],

	// The previous directory
	previous: null,

	// The parent directory
	parent: null,

	// The data object
	data: {}
}

export const getters = {
	getCurrent(state) {
		return state.current
	}
}

export const mutations = {
	// Navigate to a directory
	go(state, path) {
		// Verify if path exists
		if (!state.data[path])
			return false

		// Add to history
		state.history.push(path)

		// Set path
		state.path = path

		// Set current data
		state.current = state.data[path]
	},
}

export const actions = {
	load({ commit, state }, data) {
		let entries = Object.keys(data)

		if (entries.length == 0)
			return

		// Set data
		state.data = data

		// Load first entry as root
		commit('go', entries[0])
	},

	// Go to parent directory
	up({ commit, state }) {
		commit('go', state.current.parent)
	},

	// Go to previous directory
	back({ commit, state }) {
		if (state.history.length > 0) {
			// Remove the last one
			state.history.pop()

			// Go to the second last
			commit('go', state.history.pop())
		}
	},

	// List children on folder
	list({ state }, path) {
		let data = state.data[path].data,
			list = {}

		data.forEach(entry => {
			list[entry] = state.data[entry]
		})

		return list
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
