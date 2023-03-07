import { defineComponent } from "../../Dull";

import "./switchTheme.scss"

function switchTheme(){
	let nav = document.querySelector("nav")!
	let theme = document.createElement("span")!
	let html = document.documentElement

	let themeIndex = 0
	let themeList = [
		"light",
		"dark",
	]

	theme.classList.add("switchTheme")
	theme.innerHTML = `
<svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
<mask class="moon" id="moon-mask">
<rect x="0" y="0" width="100%" height="100%" fill="white" />
<circle cx="24" cy="10" r="6" fill="black" />
</mask>
<circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
<g class="sun-beams" stroke="currentColor">
<line x1="12" y1="1" x2="12" y2="3" />
<line x1="12" y1="21" x2="12" y2="23" />
<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
<line x1="1" y1="12" x2="3" y2="12" />
<line x1="21" y1="12" x2="23" y2="12" />
<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
</g>
</svg>`;

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

export default  defineComponent({
	name:"switchTheme",
	type:"widget",
	init: switchTheme,
})
