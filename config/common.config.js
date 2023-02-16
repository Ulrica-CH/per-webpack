const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolveApp } = require("./path");
const prodConfig = require("./webpack_prod");
const devConfig = require("./webpack_dev");
const commonConfig = {
  entry: "./src/index.js",
  output: {
    path: resolveApp("../build"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".wsam", ".mjs", ".js", "json", ".jsx", ".ts", ".vue"],
    alias: {
      "@": resolveApp("./src"),
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
};
module.exports = (env) =>
  merge(commonConfig, env.production ? prodConfig : devConfig);
