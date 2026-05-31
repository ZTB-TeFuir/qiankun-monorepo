import { createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";

let app: ReturnType<typeof createApp> | null = null;

function render(props: Record<string, unknown> = {}) {
  const { container } = props;
  const dom = container
    ? (container as HTMLElement).querySelector("#root")
    : document.getElementById("root");

  if (!dom) return;

  app = createApp(App);
  app.mount(dom);
}

renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {
    console.log("[sub-vue] bootstrap");
  },
  unmount() {
    app?.unmount();
    app = null;
  },
  update() {
    console.log("[sub-vue] update");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
