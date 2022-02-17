// const { merge } = require('webpack-merge')
// const common = require('./webpack.common.js')
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development"
};

// module.exports = merge(common, {
//   mode: 'development',
//   devtool: 'eval-source-map',
//   devServer: {
//       static: {
//           directory: path.join(__dirname, 'dist'),
//       },
//       hot: true,
//   },
// })