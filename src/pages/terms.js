import "./terms.css";

import { useLocale, useTranslation } from "../module/i18n.js";


function TermsAndConditions() {
    const locale = useLocale();
    const translate = useTranslation();

    /* this code needs to be changed but it works perfectly and i'm lazy */
    return (
        <main className="terms_main">
            <h1>{translate(locale, "tnc_title")}</h1>

            <h2>{translate(locale, "tnc_h1")}</h2>
            <p>{translate(locale, "tnc_h1p1")}</p>
            <p>{translate(locale, "tnc_h1p2")}</p>
            <p>{translate(locale, "tnc_h1p3")}</p>
            <p>{translate(locale, "tnc_h1p4")}</p>
            <p>{translate(locale, "tnc_h1p5")}</p>

            <h2>{translate(locale, "tnc_h2")}</h2>
            <p>{translate(locale, "tnc_h2p1")}</p>

            <h2>{translate(locale, "tnc_h2p2")}</h2>

            <p>{translate(locale, "tnc_h2p3")}</p>

            <h2>{translate(locale, "tnc_h3")}</h2>
            <p>{translate(locale, "tnc_h3p1")}</p>

            <p>{translate(locale, "tnc_h3p2")}</p>

            <p>{translate(locale, "tnc_h3p3")}</p>

            <p>{translate(locale, "tnc_h3p4")}</p>

            <h2>{translate(locale, "tnc_h4")}</h2>
            <p>{translate(locale, "tnc_h4p1")}</p>
            <p>{translate(locale, "tnc_h4p2")}</p>
            <p>{translate(locale, "tnc_h4p3")}</p>
            <p>{translate(locale, "tnc_h4p4")}</p>
            <p>{translate(locale, "tnc_h4p5")}</p>

            <h2>{translate(locale, "tnc_h5")}</h2>
            <p>{translate(locale, "tnc_h5p1")}</p>

            <p>{translate(locale, "tnc_h5p2")}</p>

            <h2>{translate(locale, "tnc_h6")}</h2>
            <p>{translate(locale, "tnc_h6p1")}</p>

            <h2>{translate(locale, "tnc_h7")}</h2>
            <p>{translate(locale, "tnc_h7p1")}</p>
        </main>
    );
}

export default TermsAndConditions;
