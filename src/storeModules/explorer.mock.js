export default {
	'/': {
		name: 'root',
		label: 'Root',
		parent: null,
		type: 'directory',
		data: [
			'/home'
		]
	},
	'/home': {
		name: 'home',
		label: 'Home',
		type: 'directory',
		parent: '/',
		data: [
			'/home/portfolio'
		]
	},
	'/home/portfolio': {
		name: 'portfolio',
		label: 'Portfolio',
		type: 'directory',
		parent: '/home',
		data: [
			'/home/portfolio/urban',
			'/home/portfolio/chianca'
		],
	},
	'/home/portfolio/urban': {
		name: 'urban',
		label: 'Urban',
		type: 'file',
		parent: '/home/portfolio',
		data: {
			type: 'work',
			description: '',
			thumbnail: '',
			tags: [],
			gallery: [],
		}
	},
	'/home/portfolio/chianca': {
		name: 'chianca',
		label: 'Chianca',
		type: 'file',
		parent: '/home/portfolio',
		data: {
			type: 'work',
			description: '',
			thumbnail: '',
			tags: [],
			gallery: [],
		}
	}
}
