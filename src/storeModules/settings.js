export const state = {
	postProcessing: true
}

export const getters = {
	getPostProcessing(state) {
		return state.postProcessing
	}
}

export const mutations = {
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
