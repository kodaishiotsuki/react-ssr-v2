import React, { FC } from "react";
import { Link } from "react-router-dom";
import routes from "routes";

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <p>
        <Link to={routes["/todos"].buildPath()}>Todos</Link>
      </p>
    </div>
  );
};
