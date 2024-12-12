import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
function Router() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Router;
