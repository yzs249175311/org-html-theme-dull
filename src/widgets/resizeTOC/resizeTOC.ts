import { defineComponent } from "../../Dull";
import "./resizeTOC.scss"

let main:HTMLDivElement|null;
//目录框
let toc: HTMLDivElement | null;

function addResizeBackground(){
	let parent = document.createElement("div");
	let resize = document.createElement("div");
	let resizeLine = document.createElement("div");

	parent.classList.add("table-of-contents-parent");
	parent.appendChild(toc!);

	resize.classList.add("resize");
	resizeLine.classList.add("resize-line");
	parent.appendChild(resize);
	parent.appendChild(resizeLine);

	main?.insertAdjacentElement("afterbegin",parent)
}

function resizeTOCInit(){
	main = document.querySelector("#content");
	toc = document.querySelector("#table-of-contents");

	if(!toc || !main) return;
	addResizeBackground();
}

export default defineComponent({
	name: "resizeTOC",
	type: "widget",
	init: resizeTOCInit,
})
