export default function(){
	let currentIndex = 0;
	let contentList = document.querySelectorAll("main>.outline-2")
	let tableOfContentsList = document.querySelectorAll("#text-table-of-contents>ul>li")
	let navNodeList = document.querySelectorAll("nav>.nav-node")

	console.log(contentList)
	console.log(tableOfContentsList)
	console.log(navNodeList)

	function init(){
		setActive(currentIndex)
		navNodeList.forEach( (item,index) => {
			item.addEventListener("click",() => {
				cancelActive()
				setActive(index)
			})
		})
	}

	function setActive(index:number){
		currentIndex = index
		contentList[index].classList.add("active")
		tableOfContentsList[index].classList.add("active")
		navNodeList[index].classList.add("active")
	}

	function cancelActive(){
		contentList[currentIndex].classList.remove("active")
		tableOfContentsList[currentIndex].classList.remove("active")
		navNodeList[currentIndex].classList.remove("active")
	}

	return {
		init,
	}
};
