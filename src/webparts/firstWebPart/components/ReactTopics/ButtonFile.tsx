import { PrimaryButton } from '@fluentui/react';
import * as  React from 'react';
const ButtonFile:React.FC<{}>=()=>{
    return(
        <>
        <PrimaryButton
        text='Save'
        onClick={()=>alert("I am button")}
        />
        </>
    )
}
export default ButtonFile

/// hooks 
//useState
//useEffect-> fetching the data, creating the data