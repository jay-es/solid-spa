import { useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";
import { css } from "solid-styled-components";
import { fetchPostById, fetchPostComments } from "~/api/fetch";

const Page: Component = () => {
  const { postId } = useParams();
  const [post] = createResource(postId, fetchPostById);
  const [comments] = createResource(postId, fetchPostComments);

  return (
    <>
      <Show when={!post.loading}>
        <h2>{post().title}</h2>
        <p>{post().body}</p>
      </Show>
      <h3>Comments</h3>
      <For each={comments()}>
        {(item) => (
          <div class={styles.commentItem}>
            <h4>
              {item.name} <span>({item.email})</span>
            </h4>
            <p>{item.body}</p>
          </div>
        )}
      </For>
    </>
  );
};

export default Page;

const styles = {
  commentItem: css`
    border-top: 1px solid #ddd;

    h4 span {
      font-weight: 400;
    }
  `,
};
