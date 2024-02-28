import { useLocation } from "react-router-dom";

import { getLocaleData } from "../locale/locale.js";

export function useLocale() {
    const location = useLocation();
    return location.pathname.substring(1,3);
}

export function usePath() {
    const location = useLocation();
    const path = location.pathname.substring(3);
    return path === "" ? "/" : path;
}

export function useTranslation() {
    function translate(locale, key) {
        return getLocaleData(locale)[key];
    }

    return translate;
}
