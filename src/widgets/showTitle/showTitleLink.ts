import { defineComponent } from "../../Dull"
import {toolTipWrap} from "./toolTipWrapper"

let links: NodeListOf<HTMLLinkElement>

//给所有链接添加title属性
function init() {
	//设置延迟
	links = document.querySelectorAll("main a")!
	links.forEach(function (link: HTMLLinkElement) {
	  if(link.clientWidth!==parseInt(link.style.width)){
		toolTipWrap(link,link.href,true)
	  }
	})
}

export default defineComponent({
	init,
	type: "widget",
	name: "showTitleLink",
})
