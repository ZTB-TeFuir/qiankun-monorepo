import React from "react";
import ReactDOM from "react-dom/client";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App";

let root: ReactDOM.Root | null = null;

function render(props: Record<string, unknown> = {}) {
  const { container } = props;
  const dom = container
    ? (container as HTMLElement).querySelector("#root")
    : document.getElementById("root");

  if (!dom) return;

  root = ReactDOM.createRoot(dom);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {
    console.log("[sub-react] bootstrap");
  },
  unmount() {
    root?.unmount();
    root = null;
  },
  update() {
    console.log("[sub-react] update");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
