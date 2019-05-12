import Vue from 'vue'
import Vuex from 'vuex'
import explorer from './storeModules/explorer'
import settings from './storeModules/settings'
import system from './storeModules/system'

Vue.use(Vuex)

// Create Modules object
const modules = {
	explorer,
	settings,
	system
}

// Dynamically import and namespace Vuex modules
const moduleNames = []

moduleNames.forEach(name => {
  let module = require(`./storeModules/${name}`)

  modules[name] = {
    namespaced: true,
    ...module.default
  }
})

const store = new Vuex.Store({ modules })

export default store
