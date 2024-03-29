import "./service-span.css";

import { useLocale, useTranslation } from "../module/i18n.js";

/*import { useState } from "react";*/
import { CallToActionButton } from "../components/call-to-action.js";

function ServiceSpan({ children, id, image, title, loading }) {
    const locale = useLocale();
    const translate = useTranslation();

    /*
    const [expanded, setExpanded] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
    */

    return (
        <span id={id} className="service-span-wrapper">
            <div className="service-span-image-wrapper">
                <img loading={loading} src={image} alt=""/>
            </div>
            <div className="service-span">
                <div className="service-span-title-wrapper">
                    <h1>{title}</h1>
                </div>
                <div className="service-span-children">
                    {children}
                </div>
                <CallToActionButton route={`/${locale}/services/${id}`}>
                        <p>{translate(locale, "services_btn_seeform")}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </CallToActionButton>
            </div>
        </span>
    );
}

export default ServiceSpan;
