import { defineComponent } from "../Dull";

let footNotes:HTMLDivElement|null;

function init(){
	footNotes = document.querySelector("#footnotes")
	if(!footNotes){
		return;
	}
	document.body.appendChild(footNotes);
}

export default defineComponent({
	name:"footNotes",
	type:"layout",
	init,
})
