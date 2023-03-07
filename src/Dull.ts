export interface DullOption{
	layouts?:Component[];
	widgets?:Component[];
	events?:Component[];
}

export interface Component{
	name:string,
	type: "layout" | "widget" | "event",
	init():void,
	after?:Array<string>
}

export function defineComponent(component:Component){
	return component
}

export class Dull {
	features:string[] = []
	private _obj:DullOption;
	constructor(obj:DullOption){
		this._obj = obj
	};

	featurep(name:string):boolean{
		return this.features.includes(name)
	}

	checkAfter(after:string[]):boolean{
		return after.every(this.featurep,this)
	}

	start(){
		let flag:boolean;
		do{
			flag = false
			for(let [key,values] of Object.entries(this._obj)){
				if(values.length == 0){
					continue;
				}
				for(let component of values ){
					if(this.featurep(component.name) || (component.after && !this.checkAfter(component.after))){
						// console.log("skip:"+key+"----"+component.name)
						continue
					}

					// console.log("run:"+key+"----"+component.name)
					this.features.push(component.name)
					try{
						component.init()
						flag = true;
					}catch(e){
						console.log(component.name+"=>>>加载错误")
						console.log(e)
					}
				}
			}
		}while(flag);
	}
}
