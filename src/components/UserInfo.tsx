import type { Component } from "solid-js";
import type { User } from "~/api/types";
import { Link } from "solid-app-router";
import { styled } from "solid-styled-components";

type TemplateProps = {
  className?: string;
  user: User;
};

const Template: Component<TemplateProps> = (props) => (
  <li className={props.className}>
    {props.user.id}: {props.user.name} ({props.user.username}),{" "}
    <Link href={`/users/${props.user.id}`}>user info</Link>,{" "}
    <Link href={`/users/${props.user.id}/posts`}>posts</Link>,{" "}
    <Link href={`/users/${props.user.id}/albums`}>albums</Link>,{" "}
    <Link href={`/users/${props.user.id}/todos`}>todos</Link>,{" "}
  </li>
);

const StyledComponent = styled(Template)<TemplateProps>`
  margin: 0.5em 0;
`;

export const UserInfo = StyledComponent;
