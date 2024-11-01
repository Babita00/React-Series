import Header from "./components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function Path() {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Home/> */}
      <Footer />
    </>
  );
}

export default Path;
