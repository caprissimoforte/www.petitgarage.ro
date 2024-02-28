import "./missing.css";

import { useLocale, useTranslation } from "../module/i18n.js";

function Missing() {
    const locale = useLocale();
    const translate = useTranslation();

    return (
        <main className="missing_main">
            <div>
                <h1>404</h1>
                <p>{translate(locale, "missing_errormsg")}</p>
            </div>
        </main>
    );
}

export default Missing;
