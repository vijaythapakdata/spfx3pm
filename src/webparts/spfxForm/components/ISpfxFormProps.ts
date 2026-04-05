import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ISpfxFormProps {
 
  context:WebPartContext;
  siteurl:string;
  departmentoptions:any; //single selected dropdwon
  genderoptions:any; //radi button
  skillsoptions:any; //check box
  cityoptions:any; //lookup
}
