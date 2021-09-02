import type { Post } from "~/api/types";
import { Link } from "solid-app-router";
import { Component, For, Show } from "solid-js";

type Props = { posts: Post[]; showId?: boolean };

export const PostList: Component<Props> = (props) => {
  return (
    <ul>
      <For each={props.posts}>
        {(item) => (
          <li>
            <Show when={props.showId}>{item.id}: </Show>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        )}
      </For>
    </ul>
  );
};
