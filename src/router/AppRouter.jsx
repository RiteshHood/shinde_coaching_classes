import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import Register from "../pages/Register.jsx";
import CoursesPage from "../pages/CoursesPage.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function AppRouter() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/courses" element={<CoursesPage />} />


            </Routes>
            <Footer/>

        </BrowserRouter>

    )

}