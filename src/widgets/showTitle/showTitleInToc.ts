import { defineComponent } from "../../Dull"
import { toolTipWrap } from "./toolTipWrapper"

let links: NodeListOf<HTMLLinkElement>

//给所有目录添加title属性
function init() {
	//设置延迟
	links = document.querySelectorAll("#text-table-of-contents a")!
	links.forEach(function (link: HTMLLinkElement) {
		toolTipWrap(link, link.innerText, false)
	})
}

export default defineComponent({
	init,
	type: "widget",
	name: "showTitleInToc",
})
