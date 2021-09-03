import { useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import { fetchAlbumById, fetchAlbumPhotos } from "~/api/fetch";
import { PhotoList } from "~/components/PhotoList";

const Page: Component = () => {
  const { albumId } = useParams();
  const [album] = createResource(albumId, fetchAlbumById);
  const [photos] = createResource(albumId, fetchAlbumPhotos);

  return (
    <>
      <Show when={!album.loading}>
        <h2>{album().title}</h2>
      </Show>
      <PhotoList photos={photos()} />
    </>
  );
};

export default Page;
