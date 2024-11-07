import Header from "./components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Home from "./components/Home";

function Router() {
  return (
    <>
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </>
  );
}

export default Router;
