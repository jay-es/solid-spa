import { Component, createResource } from "solid-js";
import { fetchPosts } from "~/api/fetch";
import { PostList } from "~/components/PostList";

const Page: Component = () => {
  const [posts] = createResource(fetchPosts);

  return <PostList posts={posts() ?? []} showId />;
};

export default Page;
