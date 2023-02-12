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

	setStyleAll("#table-of-contents", "z-20 fixed top-8 right-4 border rounded-lg p-4 pt-0 shadow-lg center max-h-[80%] max-w-xs hover:max-w-2xl overflow-x-hidden overflow-y-auto transition-transform translate-x-[120%] xl:translate-x-0")
	setStyleAll("#table-of-contents h2", "text-xl shadow-none font-bold border-b-2 py-4 mb-4 sticky top-0 text-center")
	setStyleAll("#table-of-contents ul:not(:nth-child(1))", "list-none list-inside m-0 pl-4")
	setStyleAll("#table-of-contents ol:not(:nth-child(1))", "list-none list-inside m-0")
	setStyleAll("#table-of-contents li", "truncate")

	setStyleAll("#content pre", "rounded-lg shadow-lg border-solid m-4")
	setStyleAll("#content ul", "list-disc list-inside m-2 pl-4")
	setStyleAll("#content ol", "list-inside m-2 pl-4 flex flex-col")

	setStyleAll("p", "inline-block text-left")
	setStyleAll("#content a", "text-blue-800 underline")

	setStyleAll("#content h1:not(.title)", "flex items-center text-5xl my-4 z-10 shadow pl-8 min-h-[3.5rem]")
	setStyleAll("#content h2", "flex items-center text-4xl my-4 z-10 shadow pl-8  min-h-[3.5rem]")
	setStyleAll("#content h3", "flex items-center text-3xl my-4 z-10 shadow  pl-8 min-h-[3.5rem]")
	setStyleAll("#content h4", "flex items-center text-2xl my-4 z-10 shadow pl-8  min-h-[3.5rem]")
	setStyleAll("#content h5", "flex items-center text-xl my-4 z-10 shadow pl-8   min-h-[3.5rem]")
	setStyleAll("#content h6", "flex items-center text-lg my-4 z-10 shadow  pl-8  min-h-[3.5rem]")
	
	setStyleAll("#content h1:not(.title) span", "flex px-2")
	setStyleAll("#content h2 span", "flex px-2")
	setStyleAll("#content h3 span", "flex px-2")
	setStyleAll("#content h4 span", "flex px-2")
	setStyleAll("#content h5 span", "flex px-2")
	setStyleAll("#content h6 span", "flex px-2")

	setStyleAll("#content h1:not(.title) span:not(.tag):not([class^=section])", "-mb-2")
	setStyleAll("#content h2 span:not(.tag):not([class^=section])", "-mb-2")
	setStyleAll("#content h3 span:not(.tag):not([class^=section])", "-mb-2")
	setStyleAll("#content h4>span:not(.tag):not([class^=section])", "-mb-2")
	setStyleAll("#content h5 span:not(.tag):not([class^=section])", "-mb-2")
	setStyleAll("#content h6 span:not(.tag):not([class^=section])", "-mb-2")


	setStyleAll("h1[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")
	setStyleAll("h2[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")
	setStyleAll("h3[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")
	setStyleAll("h4[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")
	setStyleAll("h5[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")
	setStyleAll("h6[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-8")

	setStyleAll("table", "p-4 m-4 table-auto")
	setStyleAll("thead", "bg-slate-200 rounded ")
	setStyleAll("td,thead", "border shadow p-3")
	setStyleAll("tbody>tr:nth-of-type(2n)", "bg-slate-100")

	setStyleAll("code:not(table code)", "border shadow px-2 text-red-400 w-max h-max inline-block")

	setStyleAll(".tag","bg-transparent ml-auto")
	setStyleAll(".tag span","shadow rounded-lg p-1 bg-cyan-800 text-white")
})()
