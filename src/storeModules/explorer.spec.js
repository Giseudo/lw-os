import { expect } from 'chai'
import state from './explorer.state.mock'
import { mutations } from './explorer'
const { go } = mutations

describe('mutations', () => {
	describe('Navigate through directories', () => {
		it('Should navigate to the path', () => {
			go(state, '/')

			expect(state.path).to.equal(0)
		})
	})
})
