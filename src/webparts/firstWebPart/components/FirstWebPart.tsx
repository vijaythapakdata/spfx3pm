import * as React from 'react';
// import styles from './FirstWebPart.module.scss';
import type { IFirstWebPartProps } from './IFirstWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import ButtonFile from './ReactTopics/ButtonFile';
import CounterApp from './ReactTopics/CounterApp';
import UseEffectHooks from './ReactTopics/UseEffectHooks';
import UseCallBackHooks from './ReactTopics/UseCallbackHook';
import UseMemoHooks from './ReactTopics/UseMemoHooks';

const FirstWebPart:React.FC<IFirstWebPartProps>=(props)=>{
  var a="vijay";
  console.log(a);
  a="vijay thapak";
  console.log(a);
  // const -> const is constant means it is non volatile that can not be changed or you can not update the value of const after declaring;
  
  const num1=10;
  console.log(num1);

  //let-> reverse of const 
  let num2=90;
  console.log(num2);
  num2 =100;
  console.log(num2);

  let num3 ="100";
  //basic conveersion 
  console.log(num2+parseInt(num3)); // ouput 100 100 , 200 , error


  // string function

const fname="Aman";
const lname="Sharma";
console.log(fname+" "+lname);

//second way
console.log("second way----"+fname.concat(" "+lname));

//search box

const fullName="Vijay Thapak";
 console.log(fullName.includes("vijay")); //true , false 
 console.log(fullName.toLowerCase().includes("Vijay")); //true

 const city="New Delhi";
 console.log(city.toLowerCase());
  console.log(city.toUpperCase());
  console.log(city.length);//9

  //slice 

  const prog="PowerApps";
  console.log(prog.slice(0,5));//Power

  //substring
 console.log(prog.substring(0,5));//Power

 //trim in string
 let str3="    I am SPFX      ";
 console.log(str3.trim());

 //array

 const arr1=[1,2,3,4];
 const arr2=[5,6,7,8,9];
 // spread operator-> spread operator is used to spread the elements of an array or object into another array or object
 console.log(...arr1,...arr2);

 //arry destrucitong
 console.log(arr1[0],arr1[3]);

 //  join
 const fruits=["Apple","Mango","Grapes"]
console.log(fruits);

//foreach 
fruits.forEach((value)=>{
  console.log(value);
});

//for loop

for (let i=0;i<fruits.length;i++){
  console.log(fruits[i]);
}

/// while loop
let i=0;
while(i<fruits.length){
 console.log(fruits[i]);
 i++;
}

//do while

let j=0;
do{
 console.log(fruits[j]);
 j++;
}
while(j<fruits.length);
//convert
console.log(fruits.join(",")) ;


let num_a=123;
console.log(typeof(num_a));

console.log(num_a.toString());//
//tolacle 

let amount=9099
console.log(amount.toLocaleString("en-In",{style:"currency",currency:"INR"}));//

let date=new Date();
console.log(date);
console.log(date.toLocaleString("en-In"))


  return(
    <>
    <p>hello world....</p>
    <h4>hhh</h4>
    {/* map */}

    <h4> Map Function</h4>
    {fruits.map((val,index)=>{
      return<p key={index}>{val}</p>
    })}
    {/* Bttuon file */}
    <ButtonFile/>
    <hr/>
    {/* Counter app */}

    <CounterApp/>
    {/* Useeffct */}
    <hr/>
    <UseEffectHooks/>
    <UseCallBackHooks/>
    <UseMemoHooks/>
    </>
  )
}
export default FirstWebPart;