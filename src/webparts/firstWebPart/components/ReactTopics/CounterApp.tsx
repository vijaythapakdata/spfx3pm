import { PrimaryButton } from '@fluentui/react';
import * as React from 'react';
import { useState } from 'react';
const CounterApp:React.FC<{}>=()=>{

    const [age,setage]=useState<number>(50);
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
export default CounterApp;