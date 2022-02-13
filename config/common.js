const path = require("path");
const htmlWbpackPlugin = require("html-webpack-plugin");

const resolve = p => path.resolve(__dirname, p);

module.exports = {
	entry: "./src/main.js",
	mode: "development",
	output: {
		path: resolve("../dist"),
		filename: "[name].bundle.[contenthash:8].js",
		assetModuleFilename: "images/[name].[hash:8][ext][query]",
	},
	resolve: {
		extensions: [".js", ".jsx", ".less"],
		alias: {
			"@": resolve("/src"),
			comp: resolve("/src/components"),
			utils: resolve("/src/utils"),
			static: resolve("/static"),
		},
	},
	devServer: {
		liveReload: false,
		open: true,
		port: "auto",
	},
	// externals: [
	//     {
	//         React: 'react',
	//         ReactDOM: 'react-dom'
	//     }
	// ],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								// auto: resourcePath => !resourcePath.includes("src/index.css"),
								auto: /src\/(\w+\/)+\w+\.\w+$/i,
								localIdentName: "[local]-[hash:6]",
							},
						},
					},
				],
			},
			{
				test: /\.less$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: /src\/(\w+\/)+\w+\.\w+$/i,
								localIdentName: "[local]-[hash:6]",
							},
						},
					},
					"less-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
							[
								"@babel/preset-react",
								{
									runtime: "automatic",
								},
							],
						],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.(png|gif|bmp|jpg)$/,
				type: "asset",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	plugins: [
		new htmlWbpackPlugin({
			title: "IUI",
			template: "./public/index.html",
		}),
	],
	cache: {
		type: "filesystem",
		cacheDirectory: resolve("../dist/temp_cache"),
	},
};
