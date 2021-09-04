import { useParams } from "solid-app-router";
import { Component, createResource, Show } from "solid-js";
import { fetchUserById } from "~/api/fetch";
import { ObjectInfo } from "~/components/ObjectInfo";

const Page: Component = () => {
  const { userId } = useParams();
  const [user] = createResource(userId, fetchUserById);

  return (
    <>
      <Show when={!user.loading}>
        <ObjectInfo object={user() ?? {}} />
      </Show>
    </>
  );
};

export default Page;
