import { useCallback } from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './App.css'

function App() {
const [length,setLength]=useState(8)
const [number,setNumber]=useState(false);
const[character,setCharacter]=useState(false)
const[password,setPassword]=useState("")
const [copied, setCopied] = useState(false); // Track if password is copied

//use ref hook
const passwordRef=useRef(null)


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



//working of copyPasswordToClipboard
const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  //if you have to select specified location only
  // passwordRef.current?.setSelectionRange(3,7)
window.navigator.clipboard.writeText(password)
setCopied(true); // Set copied state to true
setTimeout(() => {
  setCopied(false);
}, 2000);

},[password])

useEffect(()=>{
passwordGenerator()
},[length,number,character,passwordGenerator])


  return (
    <>
      
      
      <div className='Container'>
        <div className="inputfield">

        {copied && <span className="copied-text">Copied!</span>} {/* Show "Copied!" message */}
        <input type="text" value={password} placeholder='password' readOnly ref={passwordRef}/>
        <button  onClick={copyPasswordToClipboard}>Copy</button>
       
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

