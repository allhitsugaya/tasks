import './styles/App.css'
import HomePage from "./components/pages/HomePage.jsx";
import {Route, Routes} from "react-router-dom";
import ContactPage from "./components/pages/ContactPage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import Layout from "./components/index.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
