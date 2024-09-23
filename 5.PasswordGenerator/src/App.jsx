import { useCallback } from 'react';
import { useState } from 'react'
// import './App.css'

function App() {
const [length,setLength]=useState(8)
const [number,setNumber]=useState(false);
const[character,setCharacter]=useState(false)
const[password,setPassword]=useState("")


const passwordGenerator=useCallback(()=>{

let pass="";
let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

if(number){
  str= str+"0123456789"
}
if(character){
  str=str+"@#$^&*()?+-/><_%![]{}"
}
for (let i = 1; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * str.length+1);
  pass += str[randomIndex];
}
setPassword(pass); 
},[length,number,character,setPassword])

  return (
    <>
      
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-orange-500 bg-black'>
      test
    </div>
    </>
    
  )
}

export default App

