const path = require('path')
const webpack = require('webpack')


module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./entry.js'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/static/',
		filename: 'bundle.js'
	},
	module:{
		loaders: [
			{
			    test: /\.jsx?$/,
			    loader: 'react-hot!babel',
			    exclude: /node_modules/
			}
	    ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		extensions: ['', '.js', 'jsx', '.json']
	}
}