import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  plugins: [
    react(),
    qiankun("sub-react", { useDevMode: true }),
  ],
  server: {
    port: 8001,
    cors: true,
    origin: "http://localhost:8001",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
