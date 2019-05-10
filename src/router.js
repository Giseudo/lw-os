import Vue from 'vue'
import Router from 'vue-router'
import LWExplorer from '@/components/templates/LWExplorer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			name: 'home',
			component: LWExplorer
		}
	]
})
