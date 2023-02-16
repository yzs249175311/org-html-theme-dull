//代码复制按钮
export default function copyToClip(){
	let srcBlock = document.querySelectorAll("pre")
	srcBlock.forEach( (item:HTMLPreElement) => {
		let span = document.createElement("span")
		span.classList.add("copy-block")
		item.appendChild(span)

		span.addEventListener("click", (e: MouseEvent)=>{
			navigator.clipboard.writeText(((e.currentTarget as HTMLSpanElement).parentNode! as HTMLPreElement).innerText)
				.then(()=>{
					span.classList.add("copyed")

					setTimeout(()=>{
						span.classList.remove("copyed")
					},3000)
				}).catch(err => {
					console.log(err)
				})
		})
	})
};
