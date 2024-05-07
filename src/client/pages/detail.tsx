import React, { FC } from "react";
import { ToDoItem } from "app";
import { Link } from "react-router-dom";
import routes from "routes";
import ToDoCard from "client/components/ToDoCard";

export type DetailPageProps = {
  data: ToDoItem;
  isLoading: boolean;
};
const DetailPage: FC<DetailPageProps> = ({ data, isLoading }) => {
  if (isLoading) return <p>loading detail page</p>;
  return (
    <div>
      <h1>Detail page</h1>
      <p>
        <Link to={routes["/todos"].buildPath()}>Top</Link>
      </p>
      <ToDoCard item={data} />
    </div>
  );
};

export default DetailPage;
