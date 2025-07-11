import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: "src/api/iframe.tiptap-api.ts", // your web component source file
            formats: ["es"],
        },
        outDir: "../../App_Plugins/umbraco-tiptap-iframe", // all compiled files will be placed here
        emptyOutDir: true,
        sourcemap: true,
        rollupOptions: {
            input: {
                manifests: path.resolve(__dirname, 'src/manifests.ts'),
                iframeApi: path.resolve(__dirname, 'src/api/iframe.tiptap-api.ts'),
                iframeToolbarApi: path.resolve(__dirname, 'src/api/iframe.tiptap-toolbar-api.ts'),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                format: 'es'
            },
            external: [/^@umbraco/], // ignore the Umbraco Backoffice package in the build
            
        },
    },
    base: "/App_Plugins/umbraco-tiptap-iframe/", // the base path of the app in the browser (used for assets)
});