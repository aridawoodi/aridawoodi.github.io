import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Root base suits a user site (username.github.io).
// For a project site, set base to "/<repo-name>/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
