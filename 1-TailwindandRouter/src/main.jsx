import { StrictMode } from "react";
import "./index.css";
import Colors from "./components/Colors";
import Sizing from "./components/Sizing";
import Topography from "./components/Topography";
import Shadows from "./components/Shadows";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="colors" element={<Colors />}></Route>
      <Route path="sizing" element={<Sizing />}></Route>
      <Route path="contact" element={<Topography />}></Route>
      <Route path="topography" element={<Shadows />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* RouterProvider take props that is router */}
  </StrictMode>
);
