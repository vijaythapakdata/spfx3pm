import * as React from 'react';
import { ISharePointFormState } from './ISharePointFormState';

export const handleSingleSelectedPeoplePicker=(items:any[],setFormData:React.Dispatch<React.SetStateAction<ISharePointFormState>>)=>{
if(items.length>0){
    setFormData(prev=>({...prev,Admin:items[0].text,AdminId:items[0].id}));
}
else{
    setFormData(prev=>({...prev,Admin:"",AdminId:""}));
}
}

export const handleMultiSelectedPeoplePicker=(items:any[],setFormData:React.Dispatch<React.SetStateAction<ISharePointFormState>>)=>{
setFormData(prev=>({...prev,Manager:items.map(i=>i.text),ManagerId:items.map(i=>i.id)}));
}