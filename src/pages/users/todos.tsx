import { useParams } from "solid-app-router";
import { Component, createResource } from "solid-js";
import { fetchUserTodos } from "~/api/fetch";
import { TodoList } from "~/components/TodoList";

const Page: Component = () => {
  const { userId } = useParams();
  const [todos] = createResource(userId, fetchUserTodos);

  return <TodoList todos={todos() ?? []} />;
};

export default Page;
