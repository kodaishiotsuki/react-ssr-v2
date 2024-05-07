import React, { FC } from "react";
import ToDoList from "client/components/ToDoList";
import { ToDoItem } from "app";
import { Link } from "react-router-dom";
import routes from "routes";

export type IndexPageProps = {
  data: ToDoItem[];
  isLoading: boolean;
};
export const IndexPage: FC<IndexPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading Index Page</p>;
  return (
    <div>
      <h1>index page</h1>
      <Link to={routes["/"].buildPath()}>Home</Link>

      <ToDoList initItems={data} />
    </div>
  );
};
