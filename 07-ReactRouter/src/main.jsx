import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Route from './route';
import Home from "./Components/Home/Home"
import About from './Components/About/About';
import Contact from "./Components/Contact/Contact"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([{
  path:"/",
  element:<Route/>,
  children:[{
    path:"home",
    element:<Home/>
  },{
    path:"about",
    element:<About/>
  },{
    path:"contact",
    element:<Contact/>
  }]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    {/* RouterProvider tske props that is router */}
  </StrictMode>,
)
