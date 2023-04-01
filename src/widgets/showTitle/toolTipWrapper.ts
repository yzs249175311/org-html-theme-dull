import "./tooltip.scss"

let tooltip = document.createElement("div")
tooltip.id = "tooltip"
document.body.appendChild(tooltip)

export function toolTipWrap<T extends HTMLElement>(el: T, content: string, forceShow: boolean = false) {
	el.addEventListener("mouseenter", () => {
	  if(!forceShow && (el.scrollWidth === el.clientWidth)){
		return
	  }
		let rect = el.getBoundingClientRect()
		tooltip.style.top = rect.top + "px"
		tooltip.style.left = rect.left +  "px"
		tooltip.innerText= content
		tooltip.classList.add("show")
	})

	el.addEventListener("mouseleave", () => {
		tooltip.classList.remove("show")
	})
}
