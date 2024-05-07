const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  mode: "development", // 開発モードでビルド
  target: "node", // ターゲット環境はNode.js
  entry: {
    server: "./src/server/index.ts", // エントリーポイント：サーバーサイド
    "public/client": "./src/client/index.tsx", // エントリーポイント：クライアントサイド
    // ssg: "./src/server/generateStaticPage.ts", // エントリーポイント：静的ページ生成
  },
  output: {
    filename: "[name].js", // 出力ファイル名のパターン
    path: path.resolve(__dirname, "dist"), // 出力ディレクトリ
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .tsまたは.tsx拡張子のファイルを対象
        use: {
          loader: "ts-loader", // ts-loaderを使用
          options: {
            compilerOptions: {
              strict: false, // 厳格型チェックを無効
              strictNullChecks: false, // nullチェックの厳格化を無効
            },
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      modules: [path.resolve("./src"), "node_modules"], // モジュール解決のフォールバックパス
      crypto: require.resolve("crypto-browserify"), // ブラウザ対応版cryptoを指定
      zlib: require.resolve("browserify-zlib"), // ブラウザ対応版zlibを指定
      fs: require.resolve("fs"), // fsモジュールを指定
      http: require.resolve("stream-http"), // ブラウザ対応版httpを指定
      assert: require.resolve("assert/"), // assertモジュールを指定
    },
    extensions: [".ts", ".js", ".tsx"], // 解決する拡張子
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })], // tsconfigのパス解決プラグイン
  },
  externals: {
    "node-fetch": "commonjs2 node-fetch", // node-fetchを外部依存として扱う
  },
};
