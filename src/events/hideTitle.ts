// 往下滚动时，隐藏title
export default function hideTitle(){
	let title:HTMLDivElement = document.querySelector("header .title")!
	let main = document.querySelector("main")!

	let hidden:boolean = false;
	main.addEventListener("scroll",(e:Event)=>{
		let sTop = (e.currentTarget as HTMLDivElement).scrollTop
		if(sTop >= 100 && !hidden){
			title.classList.add("hidden")
			hidden = true;
		}else if(sTop<100 && hidden){
			title.classList.remove("hidden")
			hidden = false;
		}
		console.log(sTop)
	})
}
