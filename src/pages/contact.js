import "./contact.css";

import { useLocale, useTranslation } from "../module/i18n.js";

import { Helmet } from "react-helmet";

import Map from "../components/map.js";
import ContactDetails from "../components/contact-details.js";

function Contact() {
    const locale = useLocale();
    const translate = useTranslation();

    return (
        <main className="contact_main">
            <Helmet>
                <meta name="title" content={translate(locale, "meta_title_contact")}/>
                <meta name="description" content={translate(locale, "meta_desc_contact")}/>
                <meta name="keywords" content={translate(locale, "meta_keywords_contact")}/>
            </Helmet>
            <Map />
            <ContactDetails />
        </main>
    );
}

export default Contact;
