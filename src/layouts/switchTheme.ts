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
	theme.setAttribute("theme",themeList[themeIndex])
	theme.addEventListener("click",()=>{
		themeIndex = ++themeIndex%themeList.length
		theme.setAttribute("theme",themeList[themeIndex])
		console.log(themeList[themeIndex])
		html.className = themeList[themeIndex]
	})

	nav.appendChild(theme)

}
