import { useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";
import { fetchUserById } from "~/fetch";
import styles from "./Index.module.css";

const isObject = (object: unknown): object is Record<string, unknown> =>
  String(object) === "[object Object]";

const ObjectInfo: Component<Record<string, any>> = (object) => (
  <div class={styles.box}>
    <For each={Object.entries(object)}>
      {([key, val]) => (
        <div>
          <b>{key}:</b> {isObject(val) ? <ObjectInfo {...val} /> : val}
        </div>
      )}
    </For>
  </div>
);

const Page: Component = () => {
  const params = useParams();
  const [user] = createResource(params.userId, fetchUserById);

  return (
    <>
      <Show when={!user.loading}>
        <ObjectInfo {...user()} />
      </Show>
    </>
  );
};

export default Page;
