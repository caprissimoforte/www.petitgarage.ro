import "./thankyou.css";

import { useLocale, useTranslation } from "../module/i18n.js";

import bgimg from "../assets/garagelogo.png";

function ThankYou() {
    const locale = useLocale();
    const translate = useTranslation();

    return (
        <main className="thankyou_main" style={{
            backgroundImage: `url(${bgimg})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }}>
            <div className="thankyou-wrapper">
                {translate(locale, "thankyou")}
            </div>
        </main>
    );
}

export default ThankYou;
