import type { Album } from "~/api/types";
import { Link } from "solid-app-router";
import { Component, For, Show } from "solid-js";

type Props = { albums: Album[]; showId?: boolean };

export const AlbumList: Component<Props> = (props) => {
  return (
    <ul>
      <For each={props.albums}>
        {(item) => (
          <li>
            <Show when={props.showId}>{item.id}: </Show>
            <Link href={`/albums/${item.id}`}>{item.title}</Link>
          </li>
        )}
      </For>
    </ul>
  );
};
