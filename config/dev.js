const { merge } = require("webpack-merge");
const common = require("./common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	devServer: {
		static: "./dist",
	},
});
