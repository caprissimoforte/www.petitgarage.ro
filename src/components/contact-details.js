import "./contact-details.css";

import { useLocale, usePath, useTranslation } from "../module/i18n.js";

import { CallToActionButton } from "../components/call-to-action.js";

function ContactDetails() {
    const locale = useLocale();
    const translate = useTranslation();

    return (
        <div className="details-wrapper">
            <div className="contact-details">
                <h1 className="contact-heading">{translate(locale, "contact_heading")}</h1>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                    <p>{translate(locale, "contact_location")}</p>
                </span>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                    <p>{translate(locale, "landing_hero_hours_open")} / {translate(locale, "landing_hero_hours_closed")}</p>
                </span>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                    <a href="tel:+40758839110">0758 839 110 (Bogdan Mereț)</a>
                </span>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                    <a href="mailto:sev.service@swiso.ro">sef.service@swiso.ro</a>
                </span>

                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M80-120v-720h400v160h400v560H80Zm80-80h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm0-160h240v-80H160v80Zm320 480h320v-400H480v400Zm80-240v-80h160v80H560Zm0 160v-80h160v80H560Z"/></svg>
                    <a href="https://www.swiso.ro/">{translate(locale, "contact_extra_flavour")}</a>
                </span>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Zm-40 404h560v-568H200v568Zm0-568v568-568Z"/></svg>
                    <p>{translate(locale, "contact_extra_contact")}</p>
                </span>
                <span className="span-detail">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                    <p>{translate(locale, "contact_extra_bank")}</p>
                </span>
            </div>

            <CallToActionButton route={`/${locale}/contact/form`}>
                {translate(locale, "contact_seeform")}
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </CallToActionButton>
        </div>
    );
}

export default ContactDetails;
