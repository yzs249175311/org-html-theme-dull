import { defineConfig } from 'vite'

export default defineConfig({
	preview: {
		open: "./example.html",
	},
	server: {
		open: "./example.html",
	},
	build: {
		outDir: "docs/",
		rollupOptions: {
			input: "./example.html",
			output: {
				// 入口文件名
				entryFileNames: 'assets/org-html-theme-dull.js',
				// 块文件名
				chunkFileNames: 'assets/[name]-[hash].js',
				// 资源文件名 css 图片等等
				assetFileNames: 'assets/org-html-theme-dull.[ext]',
			},
		},
	},

})
