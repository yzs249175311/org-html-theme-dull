export default function preTopBlock(){
	let pres = document.querySelectorAll("pre")
	pres.forEach( item => {
		let topBlock = document.createElement("div")
		topBlock.classList.add("top-block")
		topBlock.appendChild(document.createElement("span"))
		topBlock.appendChild(document.createElement("span"))
		topBlock.appendChild(document.createElement("span"))
		item.insertAdjacentElement("afterbegin",topBlock)
		
	})
}
