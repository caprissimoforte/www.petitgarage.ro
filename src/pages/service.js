import "./service.css";

import { useLocale, useTranslation } from "../module/i18n.js";
import bgimg from "../assets/garagelogo.png";

function Service({ children, id }) {
    const locale = useLocale();
    const translate = useTranslation();

    return (
        <main className="service_main">
            <div className="service-children-wrapper" style={{
                backgroundImage: `url(${bgimg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="service-children">
                    <h1>{translate(locale, `services_${id}`)}</h1>
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Service;
