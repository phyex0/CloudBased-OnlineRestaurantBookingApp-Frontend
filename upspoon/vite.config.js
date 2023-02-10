import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import stringHash from "string-hash";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        if (name === "dark") return "dark";
        const i = css.indexOf(`.${name}`);
        const lineNumber = css.substring(0, i).split(/[\r\n]/).length;
        const hash = stringHash(css).toString(36).substring(0, 5);

        return `_${name}_${hash}_${lineNumber}`;
      },
    },
  },
});
