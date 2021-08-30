import { Link } from "solid-app-router";
import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { User } from "~/api/types";

type Props = {
  className?: string;
  user: User;
};

const BaseComponent: Component<Props> = (props) => (
  <li className={props.className}>
    {props.user.id}: {props.user.name} ({props.user.username}),{" "}
    <Link href={`/users/${props.user.id}`}>user info</Link>,{" "}
    <Link href={`/users/${props.user.id}/posts`}>posts</Link>,{" "}
    <Link href={`/users/${props.user.id}/albums`}>albums</Link>,{" "}
    <Link href={`/users/${props.user.id}/todos`}>todos</Link>,{" "}
  </li>
);

const StyledComponent = styled(BaseComponent)<Props>`
  margin: 0.5em 0;
`;

export const UserInfo = StyledComponent;
