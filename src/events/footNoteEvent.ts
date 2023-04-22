import { defineComponent } from "../Dull";
import { setActive } from "../events/control"

let footNotes: HTMLDivElement | null;
let outlines: NodeListOf<HTMLDivElement> | null;
let refs: NodeListOf<HTMLLinkElement>;

function init() {
	footNotes = document.querySelector("#footnotes")
	outlines = document.querySelectorAll("main>div[id^=outline-container]")
	refs = document.querySelectorAll("a.footref");

	if (!footNotes || !outlines || !refs) {
		return;
	}
	initIndex()
	addFootRefDefListener();

}

// 给点击屏幕关闭footnote页面添加时间事件
function addFootNoteWindowListener() {
	window.addEventListener("click", function close(e) {
		if (footNotes?.classList.contains("show") && !footNotes.contains(e.target as any)) {
			closeFootNote();
			window.removeEventListener("click", close)
		}
	})
}

function addFootRefDefListener() {
	let refs: NodeListOf<HTMLLinkElement> = document.querySelectorAll("a.footref");
	//多个ref对应一个def，用map存储他们之间的关系
	let defMap = new Map<HTMLLinkElement, Array<HTMLLinkElement>>();

	refs.forEach((ref) => {
		let def = document.querySelector("#" + ref.href.split("#")[1].replaceAll(/\./g, "\\.")) as HTMLLinkElement;

		if (def) {
			ref.addEventListener("click", () => {
				if (!footNotes?.classList.contains("show")) {
					openFootNote()
					def?.scrollIntoView()
				}
			})

			if (defMap.has(def)) {
				defMap.get(def)!.push(ref)
			} else {
				defMap.set(def, [ref])
			}
		}
	})

	//循环map
	for (let [key, value] of defMap.entries()) {
		key.addEventListener("click", (e) => {
			e.preventDefault();
			setActive(parseInt(value[0].dataset.index!));
			setTimeout(() => {
				value[0].scrollIntoView();
			})
		})
	}
}

//标注所有的ref在哪个页面
function initIndex() {
	outlines?.forEach((outline, index) => {
		for (let ref of Array.from(refs)) {
			if (outline.querySelector("#" + ref.id.replaceAll(/\./g, "\\."))) {
				ref.dataset.index = index + ""
			}
		}
	})
}

//打开footnote
function openFootNote() {
	footNotes?.classList.add("show");
	setTimeout(addFootNoteWindowListener)
}

//关闭footnote
function closeFootNote() {
	footNotes?.classList.remove("show");
}



export default defineComponent({
	after: ["footNotes"],
	name: "footNoteEvent",
	type: "event",
	init,
})
