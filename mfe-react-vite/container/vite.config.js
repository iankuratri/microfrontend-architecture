import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const packageJson = require("./package.json");

const PORT = 7201;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        dashboard: "http://localhost:7202/assets/remoteEntry.js",
        orders: "http://localhost:7203/assets/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
  server: { port: PORT, strictPort: true },
  preview: {
    host: "localhost",
    port: PORT,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
