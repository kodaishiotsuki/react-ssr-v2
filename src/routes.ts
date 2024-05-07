import { IndexPage } from "client/pages";
import DetailPage from "client/pages/detail";
import { Request } from "express";
import { FC } from "react";

import mockDB from "server/mockDB";

export type PageProps = {
  path: string;
  buildPath: (id?: string) => string;
  component: FC;
  getServerSideProps: (req: Request) => unknown;
};

// Point①
const routes: { [key: string]: PageProps } = {
  "/todos": {
    path: "/todos",
    buildPath: () => "/todos",
    component: IndexPage,
    getServerSideProps: (req: Request) => mockDB.findAll(),
  },
  "/todos/:id": {
    path: "/todos/:id",
    buildPath: (id: string) => "/todos/" + id,
    component: DetailPage,
    getServerSideProps: (req: Request) => mockDB.find(req.params.id),
  },
};

export default routes;
