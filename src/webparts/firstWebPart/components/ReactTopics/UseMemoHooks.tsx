import * as React from 'react';
import { TextField } from '@fluentui/react';
import { useState,useMemo } from 'react';

const UseMemoHooks:React.FC<{}>=()=>{
    const [name,setName]=useState<string>('');
    const greeting=useMemo(()=>{
console.log("greeting function called");
return ` hello ${name}`
    },[name])
    return(
        <>
        <TextField
        label='Name'
        value={name}
        onChange={(e,val)=>setName(val||"")}
        />
        <p>{greeting}</p>
        </>
    )
}
export default UseMemoHooks