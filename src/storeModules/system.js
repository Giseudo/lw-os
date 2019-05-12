export const state = {
	applications: []
}

export const getters = {
	getApplications(state) {
		return state.applications
	}
}

export const mutations = {
	execute(state, payload) {
		state.applications.push(payload.name)
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
