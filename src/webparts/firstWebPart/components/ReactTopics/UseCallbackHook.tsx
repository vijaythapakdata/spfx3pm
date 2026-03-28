import * as React from 'react';
import { useState,useCallback } from 'react';
import { TextField } from '@fluentui/react';

const UseCallBackHooks:React.FC<{}>=()=>{
    const [name,setName]=useState<string>('');
    const [email,setEmail]=useState<string>('');

    const handleChange=useCallback((_any,val?:string)=>{
console.log("Handle change function called");
setName(val||"");
setEmail(val||"")
    },[])
    return(
        <>
        <TextField
        label='Name'
        value={name}
        onChange={(handleChange)}
        />
          <TextField
        label='Email'
        value={email}
        onChange={(handleChange)}
        />
        </>
    )
}
export default UseCallBackHooks