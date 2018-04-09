const webpack = require('webpack');
module.exports = {
	entry:__dirname + "/app/main.js",
	output:{
		path:__dirname +"/public",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:"./public",
		historyApiFallback:true,
		inline:true
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:"babel-loader",
					options:{
						presets:[
						"env","react"]
					}
				},
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:[
					{
						loader:"style-loader"
					},{
						loader:"css-loader",
						// options:{
						// 	modules:true,
						// 	localIdentName:'[name]__[local]--[hash:base64:5]'
						// }
					}
				]
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('版权所有，都是瞎编'),
		
	],
}