import React from "react";
import { ISharePointFormState } from "./ISharePointFormState";
import { IDropdownOption } from "@fluentui/react";

export const handleSkillsChange=(options:IDropdownOption,formdata:ISharePointFormState,setFormData:React.Dispatch<React.SetStateAction<ISharePointFormState>>)=>{
    const selectedKey=options.selected?[...formdata.Skills,options?.key as string]:formdata.Skills.filter((key:any)=>key!==options.key);
    setFormData(prev=>({...prev,Skills:selectedKey}));
}