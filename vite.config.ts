import {defineConfig} from 'vite'
export default defineConfig({
	
  build: {
	  outDir: "docs/",
    rollupOptions: {
      output: {
        // 入口文件名
        entryFileNames: 'assets/org-theme-dull.js',
        // 块文件名
        chunkFileNames: 'assets/[name]-[hash].js',
        // 资源文件名 css 图片等等
        assetFileNames: 'assets/org-theme-dull.[ext]',
      },
    },
  },

})
