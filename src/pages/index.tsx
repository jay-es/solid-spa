import { css } from "@emotion/css";
import { Link } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { fetchUsers } from "~/api/fetch";
import { User } from "~/api/types";

const UserInfo: Component<User> = (user) => (
  <li class={styles.listItem}>
    {user.id}: {user.name} ({user.username}),{" "}
    <Link href={`/users/${user.id}`}>user info</Link>,{" "}
    <Link href={`/users/${user.id}/posts`}>posts</Link>,{" "}
    <Link href={`/users/${user.id}/albums`}>albums</Link>,{" "}
    <Link href={`/users/${user.id}/todos`}>todos</Link>,{" "}
  </li>
);

const Page: Component = () => {
  const [users] = createResource(fetchUsers);

  return (
    <>
      <ul>
        <For each={users()}>{(item) => <UserInfo {...item} />}</For>
      </ul>
      <Link href={`/albums`}>all albums</Link>,{" "}
      <Link href={`/posts`}>all posts</Link>,{" "}
      <Link href={`/todos`}>all todos</Link>,{" "}
    </>
  );
};

export default Page;

const styles = {
  listItem: css`
    margin: 0.5em 0;
  `,
};
