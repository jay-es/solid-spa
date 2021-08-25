import { Link, useParams } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { fetchUserAlbums } from "~/fetch";
import styles from "./Index.module.css";

const Page: Component = () => {
  const params = useParams();
  const [albums] = createResource(params.userId, fetchUserAlbums);

  return (
    <ul>
      <For each={albums()}>
        {(item) => (
          <li>
            <Link href={`/albums/${item.id}`}>{item.title}</Link>
          </li>
        )}
      </For>
    </ul>
  );
};

export default Page;
