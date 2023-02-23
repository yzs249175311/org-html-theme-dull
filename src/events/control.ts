//给导航按钮添加事件
let currentIndex:number;
let contentList:NodeListOf<HTMLDivElement>;
let tableOfContentsList:NodeListOf<HTMLLIElement>;
let navNodeList:NodeListOf<HTMLDivElement>;

export function setActive(index:number){
	cancelActive()
	currentIndex = index
	contentList[index]?.classList.add("active")
	tableOfContentsList[index]?.classList.add("active")
	navNodeList[index]?.classList.add("active")
}

export function cancelActive(){
	contentList[currentIndex]?.classList.remove("active")
	tableOfContentsList[currentIndex]?.classList.remove("active")
	navNodeList[currentIndex]?.classList.remove("active")
}

export function controlInit(){

	currentIndex = 0;
	contentList = document.querySelectorAll("main>.outline-2")
	tableOfContentsList = document.querySelectorAll("#text-table-of-contents>ul>li")
	navNodeList = document.querySelectorAll("nav>.nav-node")
	setActive(currentIndex)
	navNodeList.forEach( (item,index) => {
		item.addEventListener("click",() => {
			setActive(index)
		})
	})
}
