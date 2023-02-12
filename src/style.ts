export default (function(){
	function setStyle(selector:string,className:string){
		document.querySelector(selector) && (document.querySelector(selector)!.className +=" "+className);
	}

	function setStyleAll(selector:string,className:string){
		document.querySelector(selector) && (document.querySelectorAll(selector).forEach(item => {
			item.className += " " + className
		}));
	}

	document.documentElement.style.scrollBehavior = "smooth"

	setStyle("#content", "w-8/12 mr-auto ml-24 relative scroll-smooth")
	setStyle("#content h1.title", "mb-12 mt-12 shadow-none text-5xl font-bold")

	setStyleAll("#table-of-contents", "fixed top-8 right-4 border rounded-lg p-4 pt-0 shadow-lg center max-h-[80%] max-w-xs hover:max-w-fit overflow-y-auto transition-transform translate-x-[120%] xl:translate-x-0")
	setStyleAll("#table-of-contents h2", "text-xl shadow-none font-bold border-b-2 py-4 mb-4 sticky top-0 bg-white text-center")
	setStyleAll("#table-of-contents ul:not(:nth-child(1))", "list-none list-inside m-0 pl-4")
	setStyleAll("#table-of-contents ol:not(:nth-child(1))", "list-none list-inside m-0")

	setStyleAll("#content pre", "rounded-lg shadow-lg border-solid m-4")
	setStyleAll("#content ul", "list-disc list-inside m-2 pl-4")
	setStyleAll("#content ol", "list-inside m-2 pl-4 flex flex-col")

	setStyleAll("p", "inline-block text-left")

	setStyleAll("#content h1:not(.title)", "text-5xl my-4 h-12 z-10 shadow pl-4")
	setStyleAll("#content h2", "text-4xl my-4 h-12 z-10 shadow pl-4")
	setStyleAll("#content h3", "text-3xl my-4 h-12 z-10 shadow  pl-4")
	setStyleAll("#content h4", "text-2xl my-4 h-12 z-10 shadow pl-4")
	setStyleAll("#content h5", "text-xl my-4 h-12 z-10 shadow pl-4 ")
	setStyleAll("#content h6", "text-lg my-4 h-12 z-10 shadow  pl-4")

	setStyleAll("h1[id^=org]", "bg-slate-50  sticky top-0 border-solid")
	setStyleAll("h2[id^=org]", "bg-slate-50  sticky top-0 border-solid")
	setStyleAll("h3[id^=org]", "bg-slate-50  sticky top-0 border-solid")
	setStyleAll("h4[id^=org]", "bg-slate-50  sticky top-0 border-solid")
	setStyleAll("h5[id^=org]", "bg-slate-50  sticky top-0 border-solid")
	setStyleAll("h6[id^=org]", "bg-slate-50  sticky top-0 border-solid")

	setStyleAll("table", "p-4 m-4 table-auto")
	setStyleAll("thead", "bg-slate-200 rounded ")
	setStyleAll("td,thead", "border shadow p-3")
	setStyleAll("tbody>tr:nth-of-type(2n)", "bg-slate-100")

	setStyleAll("code:not(table code)", "border shadow px-2 text-red-400 w-max h-max inline-block")

})()
