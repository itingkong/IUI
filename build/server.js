const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../config/dev.js");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

// const runServer = async () => {
//     console.log('Starting server...');
//     await server.start();
// };

// runServer();

server.startCallback(res => {
	console.log("Successfully started server");
});
