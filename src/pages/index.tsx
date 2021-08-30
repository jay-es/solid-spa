import { Link } from "solid-app-router";
import { Component, createResource, For } from "solid-js";
import { fetchUsers } from "~/api/fetch";
import { UserInfo } from "~/components/UserInfo";

const Page: Component = () => {
  const [users] = createResource(fetchUsers);

  return (
    <>
      <ul>
        <For each={users()}>{(item) => <UserInfo user={item} />}</For>
      </ul>
      <Link href={`/albums`}>all albums</Link>,{" "}
      <Link href={`/posts`}>all posts</Link>,{" "}
      <Link href={`/todos`}>all todos</Link>,{" "}
    </>
  );
};

export default Page;
