import './App.css'
import { useState } from 'react';
function App() {

  let [counter,setCounter]=useState(5)

  //counter is variable
  //setCounter is function to plugin the variable


  const addValue=()=>{
    counter=counter+1;
    setCounter(counter)
    console.log("Clicked",counter);
    
  }

  const decreaseValue=()=>{
    counter=counter-1;
    setCounter(counter)
    console.log("Clicked",counter);
  }
  return (
    <>
    
     <h1>Welcome to new session of React</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value </button>
     <br/>
     <button onClick={decreaseValue}
     >Delete Value</button>
    </>
  )
}

export default App
