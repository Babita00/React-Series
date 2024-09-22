import { useState } from 'react';
import './App.css'

function App() {
 
  let [bgColor,setbgColor]=useState("white")

const handleColor=(color)=>{
  setbgColor(color)
}
  return (
    <>
    <div style={{ backgroundColor: bgColor, height:"100vh" ,width:"100vw",overflow: "hidden"}}>
      <h1>Background color change</h1>
     <div className="container">
     <button className='white' onClick={() => handleColor("white")}>White</button>
          <button className="black" onClick={() => handleColor("black")}>Black</button>
          <button className="blue" onClick={() => handleColor("blue")}>Blue</button>
          <button className="red" onClick={() => handleColor("red")}>Red</button>
          <button className="olive" onClick={() => handleColor("olive")}>Olive</button>
          <button className="green" onClick={() => handleColor("green")}>Green</button>
          <button className="purple" onClick={() => handleColor("purple")}>Purple</button>
          <button className="lavender" onClick={() => handleColor("lavender")}>Lavender</button>
      </div>
     </div>

    </>
  )
}

export default App
