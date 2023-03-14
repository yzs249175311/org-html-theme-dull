import { defineComponent } from "../Dull";
import gsap from "gsap"

//给导航按钮添加事件
let currentIndex: number = -1;
let contentList: NodeListOf<HTMLDivElement>;
let tableOfContentsList: NodeListOf<HTMLLIElement>;
let navNodeList: NodeListOf<HTMLDivElement>;

export async function setActive(index: number) {
	if (index === currentIndex) {
		return
	}

	cancelActive()
	currentIndex = index
	contentList[index]?.classList.add("active")
	tableOfContentsList[index]?.classList.add("active")
	navNodeList[index]?.classList.add("active")

	//添加出现内容出现的动画
	gsap.fromTo("main>.outline-2[class~=active],#text-table-of-contents,nav>.nav-node[class~=active]", {
		opacity: 0,
	}, {
		opacity: 1,
		duration: 0.45,
	})
}

export function cancelActive() {
	tableOfContentsList[currentIndex]?.classList.remove("active")
	navNodeList[currentIndex]?.classList.remove("active")
	contentList[currentIndex]?.classList.remove("active")
}

export function controlInit() {
	contentList = document.querySelectorAll("main>.outline-2")
	tableOfContentsList = document.querySelectorAll("#text-table-of-contents>ul>li")
	navNodeList = document.querySelectorAll("nav>.nav-node")
	navNodeList.forEach((item, index) => {
		item.addEventListener("click", () => {
			setActive(index)
		})
	})

	setActive(0)

}

export default defineComponent({
	name: "control",
	type: "event",
	init: controlInit,
})
