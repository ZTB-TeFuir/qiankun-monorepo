import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [
    vue(),
    qiankun("sub-vue", { useDevMode: true }),
  ],
  server: {
    port: 8002,
    cors: true,
    origin: "http://localhost:8002",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
