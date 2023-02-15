export default function(){
	let content = document.querySelector("#content")
	let title = document.querySelector("#content>h1.title")!
	//创建导航
	let nav = document.createElement("nav")
	let main = document.createElement("main")
	nav.classList.add("nav")
	//生成导航节点
	document.querySelectorAll(".outline-2").forEach( (elm:any) => {
		let navNode = document.createElement("span")
		let text = (elm.querySelector("h2") as HTMLSpanElement).lastChild?.nodeValue!
		navNode.innerText =  text
		navNode.classList.add("nav-node")
		nav.appendChild(navNode)
		main.appendChild(elm)
	})

	//将导航节点和title节点放在同一个header节点中
	let header:HTMLHeadElement = document.createElement("header")
	header.appendChild(title)
	header.appendChild(nav)

	//加入节点
	document.body.insertBefore(header,content)
	content?.appendChild(main)

};
