import { defineComponent } from "../../Dull"
import {toolTipWrap} from "./toolTipWrapper"

let links: NodeListOf<HTMLLinkElement>

//给所有目录添加title属性
function init() {
	//设置延迟
	links = document.querySelectorAll("#text-table-of-contents a")!
	links.forEach(function (link: HTMLLinkElement) {
	  if(link.clientWidth!==parseInt(link.style.width)){
		toolTipWrap(link,link.innerText)
	  }
	})
}

export default defineComponent({
	init,
	type: "widget",
	name: "showTitleInToc",
})
