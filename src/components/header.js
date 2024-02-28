import "./header.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getLocaleFlag, getLocaleName } from "../locale/locale.js";
import { useLocale, useTranslation, usePath } from "../module/i18n.js";

import withRouter from "./routed.js";

function DesktopNav() {
    const locale = useLocale();
    const path = usePath();
    const translate = useTranslation();
    const navigate = useNavigate();

    return (
        <span className="hdr-desktop-content">
            <nav className="hdr-desktop-nav">
                <span className="hdr-desktop-nav-routes">
                    <a tabIndex="0" className={ path === "/" ? "hdr-desktop-nav-btn-active" : "hdr-desktop-nav-btn" } href={`/${locale}`}>
                        <p>{translate(locale, "page_home")}</p>
                    </a>

                    <a tabIndex="0" className={ path.startsWith("/services") ? "hdr-desktop-nav-btn-active" : "hdr-desktop-nav-btn" } href={`/${locale}/services`}>
                        <p>{translate(locale, "page_services")}</p>
                    </a>

                    <a tabIndex="0" className={ path.startsWith("/contact") ? "hdr-desktop-nav-btn-active" : "hdr-desktop-nav-btn" } href={`/${locale}/contact`}>
                        <p>{translate(locale, "page_contact")}</p>
                    </a>
                </span>
            </nav>
            <span className="hdr-desktop-extra">
                <div className="hdr-desktop-locale">
                    <div className="hdr-desktop-nav-btn" id="hdr-desktop-locale-btn">
                        <p>{getLocaleName(locale)}</p>
                        {getLocaleFlag(locale)}
                    </div>
                    <div className="hdr-desktop-locale-dropdown">
                        <div onClick={() => navigate(`/ro${path}`)} className="hdr-desktop-nav-btn">
                            <p>{getLocaleName("ro")}</p>
                            {getLocaleFlag("ro")}
                        </div>

                        <div onClick={() => navigate(`/en${path}`)} className="hdr-desktop-nav-btn">
                            <p>{getLocaleName("en")}</p>
                            {getLocaleFlag("en")}
                        </div>
                    </div>
                </div>

                <a tabIndex="0" className="hdr-desktop-nav-btn" href="tel:+40758839110" style={{whiteSpace: "nowrap", flexDirection: "column", gap: "0px", boxSizing: "border-box", padding: "8px 16px", height: "96px", color: "white", background: "red" }}>
                    <p>+40 758 839 110</p>
                </a>
            </span>
        </span>
    );
}

function MobileNav() {
    const [navExpanded, setNavExpanded] = useState(false);
    const [localeExpanded, setLocaleExpanded] = useState(false);
    const locale = useLocale();
    const path = usePath();
    const translate = useTranslation();
    const navigate = useNavigate();

    function toggleNav() {
        setNavExpanded(!navExpanded);
    }

    function toggleLocale() {
        setLocaleExpanded(!localeExpanded);
    }

    return (
        <>
        {navExpanded && !localeExpanded &&
            <svg onClick={toggleNav} className="hdr-mobile-nav-toggle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#000" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        }

        {!navExpanded && !localeExpanded &&
            <svg onClick={toggleNav} className="hdr-mobile-nav-toggle" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#000" d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        }

        {navExpanded && localeExpanded &&
            <svg onClick={toggleLocale} className="hdr-mobile-nav-back" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
        }

        <nav style={navExpanded ? {width: "100%"} : {width: 0} } className="hdr-mobile-nav" id="mobile_nav">
            <a className="hdr-mobile-nav-btn" href="tel:+40758839110">
                <p>+40 758 839 110</p>
            </a>

            <a className={ path === "/" ? "hdr-mobile-nav-btn-active" : "hdr-mobile-nav-btn" } href={`/${locale}`}>
                <p>{translate(locale, "page_home")}</p>
            </a>

            <a className={ path.startsWith("/services") ? "hdr-mobile-nav-btn-active" : "hdr-mobile-nav-btn" } href={`/${locale}/services`}>
                <p>{translate(locale, "page_services")}</p>
            </a>

            <a className={ path.startsWith("/contact") ? "hdr-mobile-nav-btn-active" : "hdr-mobile-nav-btn" } href={`/${locale}/contact`}>
                <p>{translate(locale, "page_contact")}</p>
            </a>

            <div onClick={toggleLocale} className="hdr-mobile-nav-btn">
                <p>{getLocaleName(locale)}</p>
                {getLocaleFlag(locale)}
            </div>
        </nav>

        <div style={localeExpanded ? {width: "100%"} : {width: 0} } className="hdr-mobile-nav" id="mobile_locale">
            <div onClick={() => {navigate(`/ro${path}`); setLocaleExpanded(false);}} className="hdr-mobile-nav-btn">
                <p>{getLocaleName("ro")}</p>
                {getLocaleFlag("ro")}
            </div>

            <div onClick={() => {navigate(`/en${path}`); setLocaleExpanded(false);}} className="hdr-mobile-nav-btn">
                <p>{getLocaleName("en")}</p>
                {getLocaleFlag("en")}
            </div>
        </div>
        </>
    );
}

function Header() {
    const locale = useLocale();

    return (
        <header>
            <div className="header-wrapper">
                <span className="hdr">

                    <a tabIndex="0" className="hdr-logo" href={`/${locale}`}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 120"><path className="cls-1" d="m43.29,31.3s32.04,12.88,39.41,15.3,51.19,19.38,51.19,19.38c0,0-34.02-17.06-45.3-21.14s-45.3-13.54-45.3-13.54Z"/><path className="cls-1" d="m171.22,72.26s24.55-2.31,29.72-3.08,25.43-4.95,25.43-4.95"/><path className="cls-1" d="m171.22,76.28s24.55-2.31,29.72-3.08,25.43-4.95,25.43-4.95"/><path className="cls-1" d="m171.22,79.68s24.55-2.31,29.72-3.08,25.43-4.95,25.43-4.95"/><path className="cls-1" d="m171.22,83.6s24.55-2.31,29.72-3.08,25.43-4.95,25.43-4.95"/><path className="cls-1" d="m137.97,83.6s-4.27-6.43-.66-9.91c4.87-4.7,10.9,0,10.9,0,0,0-6.17-1.02-8.7,1.76-2.37,2.61-1.54,8.15-1.54,8.15Z"/><path className="cls-1" d="m152.58,81.66s-4.27-6.43-.66-9.91c4.87-4.7,10.9,0,10.9,0,0,0-6.17-1.02-8.7,1.76-2.37,2.61-1.54,8.15-1.54,8.15Z"/><path className="cls-1" d="m243.01,65.78s-3.73-3.43-2.29-6.32c1.94-3.9,6.37-1.9,6.37-1.9,0,0-3.97.71-4.9,2.94-.88,2.1.82,5.28.82,5.28Z"/><path className="cls-1" d="m234.6,67.68s-4.4-3.5-3.03-6.82c1.85-4.48,6.91-2.61,6.91-2.61,0,0-4.34,1.1-5.2,3.65-.81,2.39,1.32,5.78,1.32,5.78Z"/><path className="cls-1" d="m226.59,51.45l-23.45-8.92,45.58,8.92s-29.72-9.58-39.3-11.56-43.93-8.26-43.93-8.26l-20.48-21.8s-22.13-5.27-37.98-5.27-47.23,3.29-47.23,3.29l-15.19,16.18s-6.94.33-10.57,2.64c-3.63,2.31-2.64,10.57-2.64,10.57,0,0,2.75-7.16,5.39-9.58,2.64-2.42,14.31-1.1,14.31-1.1l11.23-14.97,7.16.88-7.71,17.17,2.97,1.32,7.27-18.17,7.6.66-1.65,23.12,80.59,26.61-55.82-26.94,54.17-2.31,69.69,17.5Zm-141.25-17.57V11.49l58.07-.99,19.39,20.81-77.47,2.58Z"/><path className="cls-1" d="m89.36,13.63l53.34-.99,13.94,15.36s-15.92-5.45-25.17-7.68-42.11-6.69-42.11-6.69Z"/><path className="cls-1" d="m6.46,111.14v-13.51l-.54-2.75h9.21c4.87,0,6.95,2.03,6.95,6.24s-2.09,6.18-7.07,6.18h-4.78v3.84l.89,2.75h-5.21l.54-2.75Zm8.01-6.44c2.8,0,3.89-1.03,3.89-3.49s-1.09-3.69-3.81-3.69h-4.35v7.18h4.26Z"/><path className="cls-1" d="m44.37,110.88l-.51,3.32h-14.82l.54-2.75v-13.51l-.54-2.75h14.62l.51,3.32-2.75-.69h-8.1v5.38h5.9l2.09-.34v3.26l-2.09-.34h-5.9v5.78h8.3l2.75-.69Z"/><path className="cls-1" d="m61.47,97.92v13.54l.89,2.75h-5.55l.89-2.75v-13.54h-3.61l-2.78.69.51-3.41h15.48l.54,3.41-2.78-.69h-3.61Z"/><path className="cls-1" d="m77.12,111.45v-13.51l-.54-2.75h4.86l-.54,2.75v13.51l.54,2.75h-4.86l.54-2.75Z"/><path className="cls-1" d="m101.28,97.92v13.54l.89,2.75h-5.55l.89-2.75v-13.54h-3.61l-2.78.69.51-3.41h15.48l.54,3.41-2.78-.69h-3.61Z"/><path className="cls-1" d="m144.04,105.16v8.36c-2.32.86-4.41,1.34-7.47,1.34-6.1,0-10.07-3.61-10.07-10.07s4.21-9.93,10.22-9.93c2.58,0,4.41.34,6.38.94l.57,3.81-3.21-1.66c-1.14-.23-2.29-.34-3.58-.34-3.72,0-6.53,2.18-6.53,7.15s2.49,7.41,6.47,7.41c1.4,0,2.55-.17,3.98-.57v-3.69l-1.26-2.75h4.49Z"/><path className="cls-1" d="m172.13,114.37h-4.72l-.34-2.46-.57-1.43h-8.84l-.6,1.43-.34,2.46h-4.12l7.36-17.43-.69-1.58h4.98l7.9,19Zm-6.75-6.55l-3.29-8.04-3.32,8.04h6.61Z"/><path className="cls-1" d="m199.09,114.05h-5.52l-.54-2.23-3.66-5.09h-3.81v4.58l.6,2.75h-4.92l.54-2.75v-13.51l-.54-2.75h9.44c4.72,0,6.87,2.03,6.87,5.72,0,2.63-1.46,4.58-4.44,5.27l5.98,8.01Zm-9.36-10.05c2.58,0,4.09-1.06,4.09-3.2s-1.14-3.23-3.72-3.23h-4.64v6.44h4.26Z"/><path className="cls-1" d="m227.12,114.05h-4.72l-.34-2.46-.57-1.43h-8.84l-.6,1.43-.34,2.46h-4.12l7.36-17.43-.69-1.58h4.98l7.9,19Zm-6.75-6.55l-3.29-8.04-3.32,8.04h6.61Z"/><path className="cls-1" d="m251.42,104.83v8.36c-2.32.86-4.41,1.34-7.47,1.34-6.09,0-10.07-3.61-10.07-10.07s4.21-9.93,10.22-9.93c2.58,0,4.41.34,6.38.94l.57,3.81-3.21-1.66c-1.15-.23-2.29-.34-3.58-.34-3.72,0-6.53,2.18-6.53,7.15s2.49,7.41,6.47,7.41c1.4,0,2.55-.17,3.98-.57v-3.69l-1.26-2.75h4.49Z"/><path className="cls-1" d="m274.08,110.73l-.51,3.32h-14.82l.54-2.75v-13.51l-.54-2.75h14.62l.51,3.32-2.75-.69h-8.1v5.38h5.9l2.09-.34v3.26l-2.09-.34h-5.9v5.78h8.3l2.75-.69Z"/></svg>
                    </a>

                    <DesktopNav />
                    <MobileNav />
                </span>
            </div>
        </header>
    );
}

/*
                    <a tabIndex="0" className="hdr-logo" href={`/${locale}`}>
                        <img src={logo} alt="Petit Garage logo" />
                    </a>
 */

export default withRouter(Header);
