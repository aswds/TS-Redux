import React from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypeSelector";

export const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todos
  );
  const { fetchTodos } = useAction();

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  React.useEffect(() => {
    fetchTodos();
  });
  return <div>TodoList</div>;
};
