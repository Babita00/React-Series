import { useCallback } from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

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
  //or
  // pass += str.charAt(randomIndex);

}
setPassword(pass); 
},[length,number,character,setPassword])


useEffect(()=>{
passwordGenerator()
},[length,number,character,passwordGenerator])


  return (
    <>
      
      
      <div className='Container'>
        <div className="inputfield">
        <input type="text" value={password} placeholder='password' readOnly/>
        <button>Copy</button>
        </div>


        <div className="newContainer">

        <label className="length" htmlFor="lengthRange">Length:{length}</label>
        <input type="range" min="8"max="50"value={length} onChange={(e)=>{
          setLength(e.target.value)
        }}/>
        
        
    <div className="flex items-center mb-2"> {/* Flex for alignment */}
        <input type="checkbox" defaultChecked={number} onChange={() => setNumber((prev) => !prev)} />
        <label className="numbers" htmlFor="numberInput">Numbers</label>
    </div>



    <div className="flex items-center"> {/* Add margin here */}
        <input type="checkbox" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} />

        <label className="characters ml-4" htmlFor="characterInput">Characters</label> {/* Tailwind margin-left */}
    </div>
      
        </div>


      </div>
    </>
    
  )
}

export default App

