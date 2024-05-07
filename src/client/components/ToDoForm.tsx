import { ToDoItem } from "app";
import React, { useCallback, useState, FC } from "react";
import { generateUuid } from "../../utils";

type Props = {
  addItem: (item: ToDoItem) => void;
};
const ToDoForm: FC<Props> = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addItem({ title, detail, isFinished: false, id: generateUuid() });
    },
    [title, detail]
  );

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">
        title
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          value={title}
        />
      </label>
      <label htmlFor="detail">
        detail
        <input
          type="text"
          onChange={(e) => setDetail(e.target.value)}
          id="detail"
          value={detail}
        />
      </label>
      <button>submit</button>
    </form>
  );
};

export default ToDoForm;
