import './App.css';
import Card from './component/card';


function App() {
  

  return (
    <>
     <h1 className="text-black"> Welcome to Tailwind class</h1>
     <div className="flex justify-center">
     <h1 className="text-3xl font-bold underline bg-green-400 text-black p-4 rounded-xl w-1/2">
      Hello world!
    </h1>
    </div>

    <Card productName="Utility Tshirt"/>
    <Card productName="Utility Jacket"/>
    </>
  )
}

export default App
