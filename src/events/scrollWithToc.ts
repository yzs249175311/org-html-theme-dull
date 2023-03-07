import { defineComponent } from "../Dull";

/*
* 1.监听页面标题，以同步目录对当前标题的高亮
* 2.监控当前页面控制显示的class属性变化，重新获取页面标题并监听
**/


let main = null
let heads:NodeListOf<HTMLHeadElement>|null = null;
let toc:HTMLDivElement|null = null;
let currentEntry:HTMLLinkElement|null = null

//设置目录中当前得标题
function setCurrentHeadInToc(el:string){
	if(toc){
		let elm = toc!.querySelector(`a[href="#${el}"]`)! as HTMLLinkElement
		if (currentEntry){
			currentEntry.classList.remove("current")
		}
		currentEntry = elm
		currentEntry.classList.add("current")
	}
}


//监听标题的回调方法
function callback (entrylist:IntersectionObserverEntry[]) {
	entrylist.forEach((currentItem:IntersectionObserverEntry) => {
		let rect = currentItem.boundingClientRect
		let rootRect = currentItem.rootBounds!
		let id = currentItem.target.getAttribute("id") as string
		if(rect.top<=rootRect.top){
			setCurrentHeadInToc(id)
		}
	})
}

//监听上方导航的属性变化的回调
function mCallback(mutations:MutationRecord[]){
	mutations.forEach((mutation:MutationRecord) => {
		if(mutation.attributeName == "class"){
			mutationReInit()
			intersectionReInit()
		}
	})
}

let option:IntersectionObserverInit|null = null
let ob:IntersectionObserver|null = null

let mob:MutationObserver|null = null

//初始化监听页面
function intersectionInit(){
	toc = document.querySelector("#text-table-of-contents")!
	main = document.querySelector("main")!
	let  content = main.querySelector(".outline-2[class~=active]") !
	heads = content.querySelectorAll("h2,h3,h4,h5,h6")!

	option = {
		root:main,
		rootMargin:"-20px 0px 0px 0px",
		threshold:[0,1]
	}

	ob = new IntersectionObserver(callback,option)

	heads.forEach(item =>{
		ob!.observe(item)
	})

}

//重新监听页面标题
function intersectionReInit(){
	toc = document.querySelector("#text-table-of-contents")!
	main = document.querySelector("main")!
	let  content = main.querySelector(".outline-2[class~=active]") !
	heads = content.querySelectorAll("h2,h3,h4,h5,h6")!

	if(ob){
		ob!.disconnect()
	}

	heads.forEach(item =>{
		ob!.observe(item)
	})
}

//初始化监听当前显示的页面
function mutationInit(){
	if(mob){
		mob.disconnect()
	}

	mob = new MutationObserver(mCallback)
	document.querySelectorAll("main .outline-2[class~=active]").forEach(item=>{
		mob?.observe(item,{
			attributes:true,
		})
	})
}

//重新监听当前页面,因为点击导航后,之前的页面被隐藏
function mutationReInit(){
	if(mob){
		mob.disconnect()
	}

	document.querySelectorAll("main .outline-2[class~=active]").forEach(item=>{
		mob?.observe(item,{
			attributes:true,
		})
	})
}

export function scrollWithTocInit(){
	intersectionInit()
	mutationInit()
}

export default defineComponent({
	name:"scrollWithToc",
	type:"event",
	init:scrollWithTocInit,
})
