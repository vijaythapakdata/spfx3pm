import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';
import { useState,useEffect } from 'react';
const UseEffectHooks:React.FC<{}>=()=>{

    const [age,setage]=useState<number>(50);
useEffect(()=>{
    console.log("use eefect called")
},[])
    return(
        <>
        <p> Count:{age}</p>
        <PrimaryButton
        text='Count'
        iconProps={{iconName:'Add'}}
        onClick={()=>setage(age+1)}
        />
        </>
    )
}
export default UseEffectHooks;