import { defineComponent } from "../Dull";

function preTopBlock(){
	let pres:NodeListOf<HTMLPreElement> = document.querySelectorAll("pre[class^=src],pre[class^=example]")

	pres.forEach( (item:HTMLPreElement) => {
		//给显示代码框的头部增加三个圆
		let topBlock = document.createElement("div")
		topBlock.classList.add("top-block")
		topBlock.appendChild(document.createElement("span"))
		topBlock.appendChild(document.createElement("span"))
		topBlock.appendChild(document.createElement("span"))
		item.insertAdjacentElement("afterbegin",topBlock)


		//给pre添加关于它展示的是什么代码的属性
		let lang = item.className.match(/(?<=src-)\w+|example/)
		if(lang){
			item.dataset.lang = lang[0]
		}else{
			item.dataset.lang = "unknow"
		}
	})
}

export default defineComponent({
	name:"preTopBlock",
	type:"layout",
	init:preTopBlock,
})
