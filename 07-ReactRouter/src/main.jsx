import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Router from './Router';
import Home from "./Components/Home/Home"
import About from './Components/About/About';
import Contact from "./Components/Contact/Contact"
import User from "./Components/User/User"
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import Github from './Components/Github/Github';

// const router=createBrowserRouter([{
//   path:"/",
//   element:<Router/>,
//   children:[{
//     path:"home",
//     element:<Home/>
//   },{
//     path:"about",
//     element:<About/>
//   },{
//     path:"contact",
//     element:<Contact/>
//   }]
// }])

//OR

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Router/>}>
      <Route path="home" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="user/:id" element={<User/>}></Route>
      <Route path="github" element={<Github/>}></Route>

  </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
    {/* RouterProvider tske props that is router */}
  </StrictMode>,
)
