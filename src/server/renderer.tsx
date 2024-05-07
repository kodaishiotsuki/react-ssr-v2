import ReactDOMServer from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom/server"; // StaticRouterをインポート
import App from "../client/App"; // Appコンポーネントをインポート（パスは適宜調整してください）

type Props = {
  url: string;
  pageData: unknown;
};

const createHtml = async ({ url, pageData }: Props) => {
  // StaticRouterを使用して、サーバーサイドでReactアプリケーションをレンダリング
  const pageElemHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App serverData={pageData} />
    </StaticRouter>
  );

  // HTMLドキュメントを生成
  return `
  <html>
    <head>
      <title>SSR practice</title>
    </head>
    <body>
      <div id="root" data-react='${JSON.stringify(
        pageData
      )}'>${pageElemHtml}</div>
      <script src="/public/client.js"></script>
    </body>
  </html>`;
};

export default createHtml;
