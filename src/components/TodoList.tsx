import type { Todo } from "~/api/types";
import { Link } from "solid-app-router";
import { Component, For, Show } from "solid-js";
import { Dynamic } from "solid-js/web";

type Props = { todos: Todo[]; showId?: boolean };

export const TodoList: Component<Props> = (props) => {
  return (
    <ul>
      <For each={props.todos}>
        {(item) => (
          <li>
            <Show when={props.showId}>{item.id}: </Show>
            <Link href={`/todos/${item.id}`}>
              <Dynamic component={item.completed ? "span" : "del"}>
                {item.title}
              </Dynamic>
            </Link>
          </li>
        )}
      </For>
    </ul>
  );
};
