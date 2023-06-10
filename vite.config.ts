import { defineConfig } from 'vite'

export default defineConfig({
	preview: {
		open: "./docs/org-html-theme-dull.html",
	},
	server: {
		open: "./org-html-theme-dull.html",
	},
	build: {
		outDir: "docs/",
		rollupOptions: {
			input: "./org-html-theme-dull.html",
			output: {
				// 入口文件名
				entryFileNames: 'assets/[name].js',
				// 块文件名
				chunkFileNames: 'assets/[name]-[hash].js',
				// 资源文件名 css 图片等等
				// assetFileNames: 'assets/[name].[ext]',
				assetFileNames: (chunk)=>{
					return "assets/"+chunk.name;
				},
			},
		},
	},
})
