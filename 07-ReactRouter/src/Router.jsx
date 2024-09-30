import Header from "./Components/Header/header.jsx"
import Home from "./Components/Home/Home.jsx"
import Footer from './Components/Footer/Footer.jsx';
import { Outlet } from "react-router-dom";


function Router() {
  return (
    <>
    <Header/>
    <Outlet/>
   <Home/>
   <Footer/>
    </>
  )
}


export default Router