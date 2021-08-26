import { Component, createResource } from "solid-js";
import { fetchAlbums } from "~/api/fetch";
import { AlbumList } from "~/components/AlbumList";

const Page: Component = () => {
  const [albums] = createResource(fetchAlbums);

  return <AlbumList albums={albums()} showId={true} />;
};

export default Page;
