import Vue from 'vue'
import Vuex from 'vuex'
import { assert, expect } from 'chai'

import data from './explorer.data.mock'
import explorer from './explorer'

Vue.use(Vuex)

const store = new Vuex.Store(explorer)
const { state } = store

describe('mutations', () => {
	describe('Initialization', () => {
		it('Should load data', () => {
			store.dispatch('load', data)

			expect(Object.keys(state.data)[0]).to.equal('/')
		})
	})

	describe('Navigate through directories', () => {
		it('Should navigate to the path', () => {
			store.commit('go', '/home')
			expect(store.state.path).to.equal('/home')

			store.commit('go', '/home/portfolio')
			expect(store.state.path).to.equal('/home/portfolio')
		})

		it('Should go to the previous directory', () => {
			store.commit('go', '/home')
			store.dispatch('back')

			assert.equal(store.state.path, '/home/portfolio')

			store.dispatch('back')
			assert.equal(store.state.path, '/home')
		})

		it('Should go to the parent directory', () => {
			store.commit('go', '/home/portfolio')
			store.dispatch('up')
			assert.equal(store.state.path, '/home')

			store.dispatch('up')
			assert.equal(store.state.path, '/')
		})
	})

	describe('Retrieving data', function () {
    it('Should list all children on current directory', () => {
			store.dispatch('list', '/home/portfolio')
				.then(list => {
					assert.equal(Object.keys(list).length, 2)
				})
		})
	})

  describe('Searching files', function() {
    it('Should find files with matched keyword', () => {})
    it('When there`s no result, return an empty array', () => {})
  })
})
