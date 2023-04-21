import { defineComponent } from "../../Dull"
import { toolTipWrap } from "./toolTipWrapper"

let links: NodeListOf<HTMLLinkElement>

//给所有链接添加title属性
function init() {
	let def;
	let content;
	//设置延迟
	links = document.querySelectorAll("a[class=footref]")!

	links.forEach(function (link: HTMLLinkElement) {
		let id = new URL(link.href).hash
		id = id.replaceAll(/[.]/g, "\\.");

		def = document.querySelector(id);
		content = (def?.parentElement?.nextElementSibling as HTMLDivElement).innerText

		toolTipWrap(link, content, true)
	})
}

export default defineComponent({
	init,
	type: "widget",
	name: "showFootRef",
})
