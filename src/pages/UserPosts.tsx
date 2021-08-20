import { Link, useParams } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { fetchUserPosts } from "../fetch";
import styles from "./Index.module.css";

const Page: Component = () => {
  const params = useParams();
  const [posts] = createResource(params.userId, fetchUserPosts);

  return (
    <ul>
      <For each={posts()}>
        {(item) => (
          <li>
            <Link href={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        )}
      </For>
    </ul>
  );
};

export default Page;
