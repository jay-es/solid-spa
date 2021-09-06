import type { Component } from "solid-js";
import type { Comment } from "~/api/types";
import { For } from "solid-js";
import { styled } from "solid-styled-components";

type TemplateProps = {
  className?: string;
  comments: Comment[];
};

const Template: Component<TemplateProps> = (props) => (
  <div class={props.className}>
    <For each={props.comments}>
      {(item) => (
        <div class="comment-item">
          <h4>
            {item.name} <span>({item.email})</span>
          </h4>
          <p>{item.body}</p>
        </div>
      )}
    </For>
  </div>
);

const StyledComponent = styled(Template)<TemplateProps>`
  > .comment-item {
    border-top: 1px solid #ddd;

    > h4 span {
      font-weight: 400;
    }
  }
`;

export const CommentList = StyledComponent;
