var webpack = require('webpack')
var path = require('path')

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				data: "@import '~@/stylesheets/core.scss';",
				includePaths: [
					require("bourbon-neat").includePaths,
				]
			}
		}
	},

	configureWebpack: {
		resolve: {
			extensions: ['.glsl']
		},
		module: {
			rules: [
				{
					test: /\.glsl$/,
					exclude: /(node_modules)/,
					use: {
						loader: 'raw-loader'
					}
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
				}
			}),
			new webpack.ProvidePlugin({
				THREE: 'three',
				Zlib: ['three/examples/js/libs/inflate.min', 'Zlib'],
				'window.Zlib': ['three/examples/js/libs/inflate.min', 'Zlib']
			})
		]
	}
}
