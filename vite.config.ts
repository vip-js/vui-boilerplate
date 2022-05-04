import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import typescript from '@rollup/plugin-typescript'
import dts from 'vite-plugin-dts'
// @ts-ignore
import pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //  打包TS声明文件, 与插件@rollup/plugin-typescript具有相同的效果
    dts({ outputDir: 'lib' }),
    // 参考：https://coding.m.imooc.com/questiondetail?cid=523&qid=243941
    // https://www.5axxw.com/questions/content/ptekwo
    // typescript({
    //   // tsconfig: './tsconfig.json',
    //   // tslib: require.resolve('typescript'),
    //   declaration: true, // 生成d.ts文件
    //   outDir: './dist/lib' // // 生成d.ts文件目录
    // })
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // https://vitejs.cn/config/#build-minify
    // minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Vui', // umd引入全局变量名
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: true,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
