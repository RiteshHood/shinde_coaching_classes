import ContactInfo from "../components/ContactUS/ContactInfo.jsx";
import MapSection from "../components/ContactUS/MapSection.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";

import "../components/ContactUS/Contact.css";

export default function ContactPage() {
  return (
    <>
    <Navbar/>
    <section className="contact-page">

      <div className="contact-heading">
        <h1>Contact Us</h1>

        <p>
          Have questions about admissions, batches, fees or courses?
          Reach out to us through the contact details below.
        </p>
      </div>

      <div className="contact-container">
        <ContactInfo />
      </div>

      <MapSection />

    </section>
    </>
  );
}