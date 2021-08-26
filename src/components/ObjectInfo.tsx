import { Component, For } from "solid-js";
import styles from "./ObjectInfo.module.css";

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object";

export const ObjectInfo: Component<Record<string, unknown>> = (object) => (
  <div class={styles.box}>
    <For each={Object.entries(object)}>
      {([key, val]) => (
        <div>
          <b>{key}:</b> {isObject(val) ? <ObjectInfo {...val} /> : String(val)}
        </div>
      )}
    </For>
  </div>
);
