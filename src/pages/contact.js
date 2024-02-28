import "./contact.css";

import Map from "../components/map.js";
import ContactDetails from "../components/contact-details.js";

function Contact() {
    return (
        <main className="contact_main">
            <Map />
            <ContactDetails />
        </main>
    );
}

export default Contact;
