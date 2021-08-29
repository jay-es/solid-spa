import { useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";
import { css } from "solid-styled-components";
import { fetchAlbumById, fetchAlbumPhotos } from "~/api/fetch";

const Page: Component = () => {
  const { albumId } = useParams();
  const [album] = createResource(albumId, fetchAlbumById);
  const [photos] = createResource(albumId, fetchAlbumPhotos);

  return (
    <>
      <Show when={!album.loading}>
        <h2>{album().title}</h2>
      </Show>
      <div class={styles.photo}>
        <For each={photos()}>
          {(item) => (
            <div class={styles.photoItem}>
              <p>{item.title}</p>
              <img src={item.thumbnailUrl} height="150" />
            </div>
          )}
        </For>
      </div>
    </>
  );
};

export default Page;

const styles = {
  photo: css`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  `,

  photoItem: css`
    width: 150px;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow-y: hidden;
      margin-top: 0;
      height: 2.5em;
    }
  `,
};
