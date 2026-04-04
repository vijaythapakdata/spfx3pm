import * as React from 'react';
// import styles from './SpfxForm.module.scss';
import type { ISpfxFormProps } from './ISpfxFormProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SharePointFormServiceApi } from '../../../Service/SharePointFormServiceApi';
import { ISharePointFormState } from '../../../CommonMethods/ISharePointFormState';
import {sp} from "@pnp/sp/presets/all";
import { useState,useEffect,useCallback } from 'react';
import { Dialog } from '@microsoft/sp-dialog';
import { PrimaryButton, Slider, TextField, Toggle } from '@fluentui/react';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { handleMultiSelectedPeoplePicker, handleSingleSelectedPeoplePicker } from '../../../CommonMethods/PeoplePickerHandler';
const SpfxForm:React.FC<ISpfxFormProps>=(props)=>{
  const [formData,setFormData]=useState<ISharePointFormState>({
    Name:"",
    Email:"",
    Age:"",
    Salary:"",
    Address:"",
    Permission:false,
    Score:0,
    Manager:[],
    ManagerId:[],
    Admin:"",
    AdminId:""
  });
useEffect(()=>{
  sp.setup({
    spfxContext:props.context as any
  })
},[]);

const createForm=async()=>{
  try{
const _service=new SharePointFormServiceApi(props.siteurl);
const result=await _service.addItems(formData);
Dialog.alert(`Form submitted successfully! wit Id ${result.data.Id}`);
console.log(result);
//reset form
setFormData({
  Name:"",
  Email:"",
  Age:"",
  Salary:"",
  Address:"",
  Permission:false,
  Score:0,
   Manager:[],
    ManagerId:[],
    Admin:"",
    AdminId:""
});
  }
  catch(err){
console.error("Error submitting form:",err);
  }
}

const handleSubmit=useCallback((field:keyof ISharePointFormState,value:string|boolean|number):void=>{
setFormData(prev=>({...prev,[field]:value}));
},[])
  return(
    <>
    <TextField
    label='Name'
    value={formData.Name}
    onChange={(_,a)=>handleSubmit("Name",a||"")}
    required
    />
    <TextField
    label='Email Address'
    value={formData.Email}
    onChange={(_,a)=>handleSubmit("Email",a||"")}
    required
    />
    <TextField
    label='Age'
    value={formData.Age}
    onChange={(_,a)=>handleSubmit("Age",a||"")}
   
    />
    <TextField
    label='Salary'
    value={formData.Salary}
    onChange={(_,a)=>handleSubmit("Salary",a||"")}
 prefix='$'
 suffix='USD'
    />
    <Slider
    label='Experince'
    value={formData.Score}
    onChange={(a)=>handleSubmit("Score",a||0)}
    min={0}
    max={50}
    step={0.1}
    />
    <Toggle
    label="Permission"
    checked={formData.Permission}
    onChange={(_,a)=>handleSubmit("Permission",!!a)}
    />
    {/* Single Selected People Picker */}
    <PeoplePicker
    context={props.context as any}
    titleText="Admin"
    personSelectionLimit={1}
    showtooltip={true}
    required={true}
    onChange={(items)=>handleSingleSelectedPeoplePicker(items,setFormData)}
  ensureUser={true}
    principalTypes={[PrincipalType.User]}
    defaultSelectedUsers={[formData.Admin?formData.Admin:""]}
    resolveDelay={1000} 
    webAbsoluteUrl={props.siteurl}/>
    {/* Multi-Selected People Picker */}
       <PeoplePicker
    context={props.context as any}
    titleText="Manager"
    personSelectionLimit={2}
    showtooltip={true}
    required={true}
    onChange={(items)=>handleMultiSelectedPeoplePicker(items,setFormData)}
  ensureUser={true}
    principalTypes={[PrincipalType.User]}
    defaultSelectedUsers={formData.Manager}
    resolveDelay={1000} 
    webAbsoluteUrl={props.siteurl}/>
    <TextField
    label='Full Address'
    value={formData.Address}
    onChange={(_,a)=>handleSubmit("Address",a||"")}
    required
    multiline
    rows={5}
    />
    <br/>
    <PrimaryButton
    text='Save'
    onClick={createForm}
    iconProps={{iconName:'save'}}
    />
    </>
  )
}
export default SpfxForm;
