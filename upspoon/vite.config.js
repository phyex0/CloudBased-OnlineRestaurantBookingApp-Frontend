import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import stringHash from "string-hash";
import {nodePolyfills} from "vite-plugin-node-polyfills";
import requireTransform from "vite-plugin-require-transform";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgr(),
        requireTransform({}),
        nodePolyfills({
            // Whether to polyfill `node:` protocol imports.
            protocolImports: true,
        }),
    ],
    build: {
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
    server: {
        watch: {
            usePolling: true,

        },
        host: '127.0.0.1'
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
