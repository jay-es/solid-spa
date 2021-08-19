import { Component, createResource, For } from "solid-js";
import { fetchUsers } from "../fetch";
import { User } from "../types";
import styles from "./Index.module.css";

const UserInfo: Component<User> = (user) => (
  <li class={styles.listItem}>
    {user.id}: {user.name} ({user.username})
  </li>
);

const Page: Component = () => {
  const [users] = createResource(fetchUsers);

  return (
    <ul>
      <For each={users()}>{(item) => <UserInfo {...item} />}</For>
    </ul>
  );
};

export default Page;
