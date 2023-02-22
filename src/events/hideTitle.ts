// 往下滚动时，隐藏title
export default function hideTitle(){
	let title:HTMLDivElement = document.querySelector("header .title")!
	let main = document.querySelector("main")!

	let hidden:boolean = false;
	main.addEventListener("scroll",(e:Event)=>{
		let sTop = (e.currentTarget as HTMLDivElement).scrollTop
		//条件判断的值可以设置的大一点
		if(sTop >= 200 && !hidden){
			//设置回调,防止隐藏title后,因为内容不够，sTop的值发生改变造成屏幕抖动
			setTimeout(()=>{
				title.classList.add("hidden")
			},400)
			hidden = true;
		}else if(sTop<200 && hidden){
			setTimeout(()=>{
				title.classList.remove("hidden")
			},400)
			hidden = false;
		}
	})
}
