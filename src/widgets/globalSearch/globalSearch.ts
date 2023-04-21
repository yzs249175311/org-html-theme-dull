import { defineComponent } from "../../Dull";

import "../../widgets/globalSearch/globalSearch.scss";
import { setActive } from "../../events/control";
let ttc:HTMLDivElement|null = null

let searchContainer:HTMLDivElement|null = null
let searchResult:HTMLDivElement|null = null
let searchCom = null
let searchInput:HTMLInputElement|null = null
let searchButton:HTMLButtonElement|null= null

let searchedItem:HTMLElement|null = null

let containers:NodeListOf<HTMLDivElement> | null = null
let currentToc:HTMLSpanElement

type vnodeType = {
	node:HTMLElement,
	content:string,
}

function openResult(){
	searchResult?.classList.add("open")
	ttc?.classList.add("hidden")
}

function closeResult(){
	searchResult?.classList.remove("open")
	ttc?.classList.remove("hidden")
}

//初始化结构和数据
function layoutInit(){
	containers = document.querySelectorAll("main>[id^=outline-container-org]")

	searchContainer = document.createElement("div")
	searchContainer.className = "searchContainer"

	searchResult = document.createElement("div")
	searchResult.className = "searchResult"

	searchCom = document.createElement("div")
	searchCom.className = "searchCom"

	searchInput= document.createElement("input")
	searchInput.className = "searchInput"
	searchInput.type = "text"
	searchInput.placeholder = "请输入内容"

	searchButton= document.createElement("button")
	searchButton.className = "searchButton"
	searchButton.innerHTML= `
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038ZM4.622,9.311a1,1,0,0,1,2,0A2.692,2.692,0,0,0,9.311,12a1,1,0,0,1,0,2A4.7,4.7,0,0,1,4.622,9.311Z"></path></g></svg>
`

	// searchContainer.appendChild(searchResult)
	// searchContainer.appendChild(searchCom)

	searchCom.appendChild(searchInput)
	searchCom.appendChild(searchButton)

	let nav = document.querySelector(".nav")
	nav?.appendChild(searchCom)

	ttc = document.querySelector("#text-table-of-contents")
	ttc?.insertAdjacentElement("afterend",searchResult)
}

//递归查询元素所有符合条件的node
function searchFrom (str:string|null|undefined,elm:HTMLElement|null) {
	let vnodes:vnodeType[] = []
	if(!elm || !str) return [];
	elm.childNodes.forEach( item => {
		if(item.nodeType === 3){
			if(item.nodeValue?.match(str)){
				vnodes.push({
					node:elm,
					content:item.nodeValue
				})
			}
		}
		if(item.nodeType === 1){
			vnodes=[...vnodes,...searchFrom(str,(item as HTMLElement))]
		}
	})

	return vnodes
}

function searchFromAll (str:string|null|undefined,elms:NodeListOf<HTMLElement>|null) {
	let res:vnodeType[][]=[];
	elms?.forEach(item => {
		res.push(searchFrom(str,item))
	})
	return res
}

//定位元素，并跳转,删除之前元素的样式
function positionTo(vnode:vnodeType){
	searchedItem?.classList.remove("searched-item")
	searchedItem = vnode.node
	searchedItem.scrollIntoView()
	searchedItem.classList.add("searched-item")
}

//渲染vnodes里数据到元素里
function renderTo(vnodes:any,elm:HTMLElement|null,fn:Function){
	if(!elm) return;
	let ul = document.createElement("ul")
	vnodes.map( (item:vnodeType) => {
		let li = document.createElement("li")
		let span = document.createElement("span")
		span.innerHTML = item.content
		li.appendChild(span)
		span.addEventListener("click",() => {
			currentToc?.classList.remove("current")
			currentToc = span
			span.classList.add("current")
			fn(item)
		})
		ul.appendChild(li)
	})
	elm?.appendChild(ul)
}

//开始搜索
function searchStart(){
	unsetAll()
	if(searchInput?.value == ""){
		closeResult()
		return;
	}
	let result = searchFromAll(searchInput?.value,containers)
	result.forEach((item,index) => {
		if(item.length == 0 ) return;

		let head = document.createElement("h4")
		head.innerText = (containers![index] as HTMLDivElement).querySelector!("h2")?.innerText!
		searchResult?.appendChild(head)
		renderTo(item,searchResult,(vnode:vnodeType)=>{
			setActive(index)
			setTimeout(()=>{
				positionTo(vnode)
			})
		})
	})
	openResult()
}

//添加事件
function eventInit(){
	searchButton?.addEventListener("click",()=>{
		searchStart()
	})

	searchInput?.addEventListener("input",(e)=>{
		let value = (e.currentTarget as HTMLInputElement).value
		if(value == ""){
			unsetAll()
		}
	})

	searchInput?.addEventListener("keydown", (e:KeyboardEvent)=>{
		if(e.key === "Enter"){
			searchStart()
		}
	})

}

function unsetAll(){
	searchResult!.innerHTML = '<div class="serchResult"></div>'
	searchedItem?.classList.remove("searched-item")
	closeResult()
}


export function globalSearchInit(){
	layoutInit()
	eventInit()
}


export default defineComponent({
	name:"globalSearch",
	type:"widget",
	init:globalSearchInit,
})
