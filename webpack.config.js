const path = require("path");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",

  entry: "./src/food-app/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    // 内部的に保持するbundle.jsの位置を決める
    //. 開発時と本番時で合わせるためにディレクトリ構成に合わせると良い
    publicPath: "/dist/",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"],
  },
};
