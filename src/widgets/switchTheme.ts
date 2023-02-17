export default function switchTheme(){
	let nav = document.querySelector("nav")!
	let theme = document.createElement("span")!
	let html = document.documentElement

	let themeIndex = 0
	let themeList = [
		"light",
		"dark",
	]

	theme.classList.add("theme")

	theme.addEventListener("click",()=>{
		themeIndex = ++themeIndex%themeList.length
		theme.setAttribute("theme",themeList[themeIndex])
		html.setAttribute("theme",themeList[themeIndex])
	})
	nav.appendChild(theme)

	//匹配系统主题,如果是dark,自动切换
	const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");
	if(themeMedia.matches){
		themeIndex=1
	}

	theme.setAttribute("theme",themeList[themeIndex])
	html.setAttribute("theme",themeList[themeIndex])
}
