import { useParams } from "solid-app-router";
import { Component, createResource } from "solid-js";
import { fetchUserAlbums } from "~/api/fetch";
import { AlbumList } from "~/components/AlbumList";

const Page: Component = () => {
  const { userId } = useParams();
  const [albums] = createResource(userId, fetchUserAlbums);

  return <AlbumList albums={albums() ?? []} />;
};

export default Page;
