import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const PORT = 7203;

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
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  server: { port: PORT },
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
