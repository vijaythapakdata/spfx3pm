import { WebPartContext } from "@microsoft/sp-webpart-base";
import { ListNames } from "../Enum/ListNames";

export default class ChoiceServiceApi{
    private context:WebPartContext;
    constructor(context:WebPartContext){
        this.context=context;

    }

public async getChoiceValues(siteurl:string,fieldValue:string):Promise<any>{
    try{
const response=await fetch(`${siteurl}/_api/web/lists/getbytitle('${ListNames.FirstList}')/fields/?$filter=EntityPropertyName eq '${fieldValue}'`,{
    method:'GET',
    headers:{
        "Accept":"application/json;odata=nometadata"
    }
});
if(!response.ok){
    throw new Error(`Error fetching choice values: ${response.statusText}`);
}
const data=await response.json();
const choices=data.value[0].Choices;
return choices.map((items:any)=>({
    key:items,
    text:items
}));
    }
    catch(err){
console.error("Error in getChoiceValues:",err);
throw err;
    }
}
//get lookup values
public async getLookupvalues():Promise<void>{
    try{
const response=await fetch(`${this.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('${ListNames.City}')/items?$select=ID,Title`,{
method:'GET',
headers:{
      "Accept":"application/json;odata=nometadata"
}
})
if(!response.ok){
    throw new Error(`Error fetching choice values: ${response.statusText}`);
}
const data=await response.json();
return data.value.map((city:{Title:string,ID:string})=>({
    key:city.ID,
    text:city.Title
}));
    }
    catch(err){
console.error("Error in getLookupValues:",err);
throw err;
    }
}
}