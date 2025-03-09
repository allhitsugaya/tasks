import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {Paper} from "@mui/material";

const Layout = () => {
    return (
        <>
        <Header/>
          <main>
              <Outlet/>
          </main>
         <Footer/>
        </>
    )
}
export default Layout