import { Component, createResource } from "solid-js";
import { fetchTodos } from "~/api/fetch";
import { TodoList } from "~/components/TodoList";

const Page: Component = () => {
  const [todos] = createResource(fetchTodos);

  return <TodoList todos={todos() ?? []} showId />;
};

export default Page;
