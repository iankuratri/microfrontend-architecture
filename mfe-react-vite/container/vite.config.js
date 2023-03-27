import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const packageJson = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        dashboard: "dashboard@http://localhost:7202/remoteEntry.js",
        orders: "orders@http://localhost:7203/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
  server: { port: 7201 },
});
