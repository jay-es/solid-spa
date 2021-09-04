import { useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import { fetchTodoById } from "~/api/fetch";
import { ObjectInfo } from "~/components/ObjectInfo";

const Page: Component = () => {
  const { todoId } = useParams();
  const [todo] = createResource(todoId, fetchTodoById);

  return (
    <>
      <Show when={!todo.loading}>
        <ObjectInfo object={todo() ?? {}} />
      </Show>
    </>
  );
};

export default Page;
