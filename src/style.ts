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

	setStyleAll("p", "text-left")
	setStyleAll("table", "p-4 m-4 table-auto")
	setStyleAll("thead", "bg-slate-200 rounded ")
	setStyleAll("td,thead", "border shadow p-3")
	setStyleAll("tbody>tr:nth-of-type(2n)", "bg-slate-100")
	setStyleAll("code:not(table code)", "border shadow px-2 text-red-400 w-max h-max inline-block")

	setStyleAll(".tag","flex item-center bg-transparent ml-auto")
	setStyleAll(".tag span","flex items-center  rounded-lg p-1 bg-cyan-800 text-white")

	setStyle("#content", "w-8/12 mr-auto ml-24 relative")
	setStyle("#content h1.title", "mb-12 mt-12 shadow-none text-5xl font-bold")

	setStyleAll("#table-of-contents", "z-20 bg-white fixed top-8 right-4 border rounded-lg p-4 pt-0 shadow-lg center max-h-[80%] max-w-xs hover:max-w-2xl overflow-x-hidden overflow-y-auto transition-transform translate-x-[120%] xl:translate-x-0")
	setStyleAll("#table-of-contents h2", "text-xl shadow-none font-bold border-b-2 py-4 mb-4 sticky top-0 text-center")
	setStyleAll("#table-of-contents ul:not(:nth-child(1))", "list-none list-inside m-0 pl-4")
	setStyleAll("#table-of-contents ol:not(:nth-child(1))", "list-none list-inside m-0")
	setStyleAll("#table-of-contents li", "truncate")
	setStyleAll("#table-of-contents li a", "flex items-center  h-[2rem] hover:underline")
	setStyleAll("#table-of-contents li a>span:nth-child(1):not(.tag)", "-mb-[0.2rem]")
	setStyleAll("#table-of-contents li a .tag span", "scale-[0.6] -mx-3")

	setStyleAll("#content pre", "rounded-lg shadow-inner border-solid m-4")
	setStyleAll("#content ul", "list-disc list-inside flex flex-col my-2 ml-8")
	setStyleAll("#content div>ul", "ml-0")
	setStyleAll("#content ol", "list-inside  flex flex-col my-2 ml-8")
	setStyleAll("#content div>ol", "ml-0")
	setStyleAll("#content li", "my-[0.1rem]")

	setStyleAll("#content li>p:nth-child(1)", "inline-block")

	setStyleAll("#content .tag","text-sm absolute right-0")
	setStyleAll("#content .tag span","")

	setStyleAll("#content a", "text-blue-800 underline")

	setStyleAll("h1[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-0")
	setStyleAll("h2[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-0")
	setStyleAll("h3[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:max-h-auto hover:whitespace-normal hover:overflow-x-autopr-0 hover:text-clip")
	setStyleAll("h4[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-0")
	setStyleAll("h5[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-0")
	setStyleAll("h6[id^=org]", "bg-slate-50  sticky top-0 border-solid truncate hover:z-20  hover:max-h-auto hover:whitespace-normal hover:overflow-x-auto hover:text-clip pr-0")

	setStyleAll("#content h1:not(.title)", "flex items-center text-5xl my-4 z-10 shadow-md pl-8 min-h-[3.5rem]")
	setStyleAll("#content h2", "flex items-center text-4xl my-4 z-10 shadow-md pl-8  min-h-[3.5rem]")
	setStyleAll("#content h3", "flex items-center text-3xl my-4 z-10 shadow-md  pl-8 min-h-[3.5rem]")
	setStyleAll("#content h4", "flex items-center text-2xl my-4 z-10 shadow-md pl-8  min-h-[3.5rem]")
	setStyleAll("#content h5", "flex items-center text-xl my-4 z-10 shadow-md pl-8   min-h-[3.5rem]")
	setStyleAll("#content h6", "flex items-center text-lg my-4 z-10 shadow-md  pl-8  min-h-[3.5rem]")
	
	setStyleAll("#content h1:not(.title) span", "flex")
	setStyleAll("#content h2 span", "flex ")
	setStyleAll("#content h3 span", "flex ")
	setStyleAll("#content h4 span", "flex ")
	setStyleAll("#content h5 span", "flex ")
	setStyleAll("#content h6 span", "flex ")

	//TOOD
	setStyleAll("#content h1:not(.title)>span:nth-of-type(2):not(.tag)", "-mb-2 mx-2")
	setStyleAll("#content h2>span:nth-of-type(2):not(.tag):not([class^=section])", "-mb-2 mx-2")
	setStyleAll("#content h3>span:nth-of-type(2):not(.tag):not([class^=section])", "-mb-2 mx-2")
	setStyleAll("#content h4>span:nth-of-type(2):not(.tag):not([class^=section])", "-mb-2 mx-2")
	setStyleAll("#content h5>span:nth-of-type(2):not(.tag):not([class^=section])", "-mb-2 mx-2")
	setStyleAll("#content h6>span:nth-of-type(2):not(.tag):not([class^=section])", "-mb-2 mx-2")

})()
