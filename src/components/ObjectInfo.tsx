import { Component, For } from "solid-js";
import { styled } from "solid-styled-components";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object";

type Props = {
  className?: string;
  object: Record<string, unknown>;
};

const BaseComponent: Component<Props> = (props) => (
  <div className={props.className}>
    <For each={Object.entries(props.object)}>
      {([key, val]) => (
        <div>
          <b>{key}:</b>{" "}
          {isObject(val) ? (
            <BaseComponent object={val} className={props.className} />
          ) : (
            String(val)
          )}
        </div>
      )}
    </For>
  </div>
);

const StyledComponent = styled(BaseComponent)<Props>`
  line-height: 1.5;

  & & {
    padding-left: 1em;
  }

  b {
    font-weight: 600;
  }
`;

export const ObjectInfo = StyledComponent;
