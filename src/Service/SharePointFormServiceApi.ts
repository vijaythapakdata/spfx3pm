import {Web} from "@pnp/sp/presets/all";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { ListNames } from "../Enum/ListNames";
import { ISharePointFormState } from "../CommonMethods/ISharePointFormState";

export class SharePointFormServiceApi{
    private web;
    constructor(siteurl:string){
        this.web=Web(siteurl);
    }

    public async addItems(formData:ISharePointFormState):Promise<any>{
        try{
const list=this.web.lists.getByTitle(ListNames.FirstList);
const items=await list.items.add({
    Title:formData.Name,
    EmailAddress:formData.Email,
    Age:parseInt(formData.Age),
    Salary:parseFloat(formData.Salary),
    Score:formData.Score,
    Permission:formData.Permission,
    Address:formData.Address,
    AdminId:formData.AdminId,
    ManagerId:{results:formData.ManagerId},
    Department:formData.Department,
    Skills:{results:formData.Skills},
    Gender:formData.Gender,
    CityId:formData.City
});
return items;
        }
        catch(err){
console.error("Error adding item to SharePoint list:", err);
throw err;
        }
    }

    //attachment 

    public async addAttachment(itemId:number,Attachments:File[]):Promise<void>{
        if(!Attachments||Attachments.length===0)return;
        const list =this.web.lists.getByTitle(ListNames.FirstList);
        for(const file of Attachments){

            await list.items.getById(itemId).attachmentFiles.add(file.name,file);
        }
    }
}