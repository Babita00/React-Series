import { StrictMode } from "react";
import "./index.css";
import Home from "./Components/Home.jsx";
import Router from "./Router.jsx";
import Login from "./Components/Login.jsx";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Router />}>
      <Route path="login" element={<Login />}></Route>
      <Route path="home" element={<Home />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
