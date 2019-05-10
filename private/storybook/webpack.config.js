const path = require('path')
const webpack = require('webpack')

module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			THREE: 'three',
			Zlib: ['three/examples/js/libs/inflate.min', 'Zlib'],
			'window.Zlib': ['three/examples/js/libs/inflate.min', 'Zlib']
		})
	]
};
