import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'
import svgLoader from "vite-svg-loader";
// import typescript from '@rollup/plugin-typescript'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";


export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './src/lib/index.ts'),
            name: 'xing-vue-ui',
            fileName: 'xing-vue-ui'
        },
        rollupOptions: {
            input: 'src/lib/index.ts',
            external: ['vue'],
            output: {
                dir: 'dist',
                globals: {
                    vue: 'Vue'
                }
            },
            // plugins: [
            //     typescript({
            //         tslib: resolve('typescript'),
            //         // include: resolve(__dirname, 'src/lib/**'),
            //         exclude: [
            //             resolve(__dirname, 'src/homepage/**'),
            //             resolve(__dirname, 'src/example/**'),
            //         ],
            //         outDir: resolve(__dirname, 'dist/types')
            //     })
            // ]
        }
    },
    plugins: [
        vue(),
        svgLoader({
            defaultImport: 'component'
        }),
        cssInjectedByJsPlugin(),
        dts()
    ]
})
