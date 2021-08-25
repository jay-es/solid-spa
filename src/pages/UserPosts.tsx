import { useParams } from "solid-app-router";
import { Component, createResource } from "solid-js";
import { fetchUserPosts } from "~/api/fetch";
import { PostList } from "~/components/PostList";

const Page: Component = () => {
  const { userId } = useParams();
  const [posts] = createResource(userId, fetchUserPosts);

  return <PostList posts={posts()} />;
};

export default Page;
