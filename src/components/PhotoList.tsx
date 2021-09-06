import type { Component } from "solid-js";
import type { Photo } from "~/api/types";
import { For } from "solid-js";
import { styled } from "solid-styled-components";

type TemplateProps = {
  className?: string;
  photos: Photo[];
};

const Template: Component<TemplateProps> = (props) => (
  <div class={props.className}>
    <For each={props.photos}>
      {(item) => (
        <div class="photo-item">
          <p>{item.title}</p>
          <img src={item.thumbnailUrl} height="150" />
        </div>
      )}
    </For>
  </div>
);

const StyledComponent = styled(Template)<TemplateProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  > .photo-item {
    width: 150px;

    > p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow-y: hidden;
      margin-top: 0;
      height: 2.5em;
    }
  }
`;

export const PhotoList = StyledComponent;
