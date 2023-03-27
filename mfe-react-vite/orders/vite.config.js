import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
const packageJson = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "orders",
      filename: "remoteEntry.js",
      exposes: {
        "./OrdersApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
  server: { port: 7203 },
});
