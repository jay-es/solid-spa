import { css } from "@emotion/css";
import { Component, For } from "solid-js";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object";

export const ObjectInfo: Component<Record<string, unknown>> = (object) => (
  <div class={styles.root}>
    <For each={Object.entries(object)}>
      {([key, val]) => (
        <div>
          <b>{key}:</b> {isObject(val) ? <ObjectInfo {...val} /> : String(val)}
        </div>
      )}
    </For>
  </div>
);

const styles = {
  root: css`
    line-height: 1.5;

    & & {
      padding-left: 1em;
    }
    b {
      font-weight: 600;
    }
  `,
};
