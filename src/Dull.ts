export interface DullOption{
	layouts?:Function[];
	events?:Function[];
}

export class Dull {
	private _obj:DullOption;
	
	constructor(obj:DullOption){
		this._obj = obj
	};

	start(){
		for(let [key,values] of Object.entries(this._obj)){
			if(values.length == 0){
				continue;
			}
			for(let fn of values){
				console.log("run:"+key+"----"+fn.name)
				fn()
			}
		}
	}
}
