import { useParams } from "solid-app-router";
import { Component, createResource, For, Show } from "solid-js";
import { fetchAlbumById, fetchPhotosByAlbumId } from "~/api/fetch";
import styles from "./Index.module.css";

const Page: Component = () => {
  const { albumId } = useParams();
  const [album] = createResource(albumId, fetchAlbumById);
  const [photos] = createResource(albumId, fetchPhotosByAlbumId);

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
