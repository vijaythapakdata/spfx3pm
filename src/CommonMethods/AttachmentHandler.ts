import * as React from 'react';

export const handleAttachementChange=(event:React.ChangeEvent<HTMLInputElement>,setAttachment:React.Dispatch<React.SetStateAction<File[]>>)=>{
    const files=event.target.files;
    if(!files) return;
    //converting FileList to Array
    const newfiles=Array.from(files);
    setAttachment(prev=>[...prev,...newfiles]);
}