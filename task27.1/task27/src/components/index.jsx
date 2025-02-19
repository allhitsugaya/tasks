import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router";
import {Theme} from "./theme/Theme.jsx";

const Layout = () => {
    return (
        <>
            <Theme>
        <Header/>

          <main>
              <Outlet/>
          </main>

         <Footer/>
            </Theme>
        </>
    )
}
export default Layout