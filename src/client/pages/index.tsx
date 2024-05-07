import React, { FC } from "react";
import ToDoList from "client/components/ToDoList";
import { ToDoItem } from "app";

export type IndexPageProps = {
  data: ToDoItem[];
  isLoading: boolean;
};
export const IndexPage: FC<IndexPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading Index Page</p>;
  return (
    <div>
      <h1>index page</h1>
      <ToDoList initItems={data} />
    </div>
  );
};
