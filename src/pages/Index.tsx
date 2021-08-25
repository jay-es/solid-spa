import { Link } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { fetchUsers } from "~/api/fetch";
import { User } from "~/api/types";
import styles from "./Index.module.css";

const UserInfo: Component<User> = (user) => (
  <li class={styles.listItem}>
    {user.id}: {user.name} ({user.username}),{" "}
    <Link href={`/users/${user.id}`}>user info</Link>,{" "}
    <Link href={`/users/${user.id}/posts`}>posts</Link>,{" "}
    <Link href={`/users/${user.id}/albums`}>albums</Link>,{" "}
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
