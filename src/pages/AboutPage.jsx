import HeroAbout from "../components/about/HeroAbout.jsx";
import AboutSection from "../components/About/AboutSection.jsx";
import WhyChooseUs from "../components/About/WhyChooseUs.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import "../styles/AboutPage.css";

export default function AboutPage(){

    return(

        <>

            <Navbar/>
            <HeroAbout/>

            <AboutSection/>

            <WhyChooseUs/>


        </>

    )

}