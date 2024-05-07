const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development",
  target: "node",
  entry: {
    "server/server": "./src/server/index.ts",
    "client/client": "./src/client/index.tsx",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/, // node_modulesを除外
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              strict: false,
              strictNullChecks: false,
            },
            allowTsInNodeModules: false, // 必要に応じて true に変更
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  externals: {
    express: "commonjs express",
    "node-fetch": "commonjs2 node-fetch",
  },
};
