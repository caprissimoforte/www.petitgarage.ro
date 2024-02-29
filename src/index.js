import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./core.css";

/*import { useEffect, useState } from "react";*/

import {
    createBrowserRouter,
    BrowserRouter,
    Routes,
    Route,
    RouterProvider,
    Outlet,
    Navigate,
} from "react-router-dom";

import { Helmet } from "react-helmet";

import { ServiceForm } from "./components/form.js";

import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Landing from "./pages/landing.js";
import Contact from "./pages/contact.js";
import Services from "./pages/services.js";
import Service from "./pages/service.js";
import ContactFormPage from "./pages/contactform.js";
import TermsAndConditions from "./pages/terms.js";
import Missing from "./pages/missing.js";
import ThankYou from "./pages/thankyou.js";

const basename = process.env.BASENAME;
const emailserviceid = process.env.EMAILSERVICEID;
const emailtemplateid = process.env.EMAILTEMPLATEID;
const publickey = process.env.EMAILPUBKEY;

function makeLocalePath(locale) {
    const result = {
                path: `/${locale}`,
                element: <PageLayout locale={locale}/>,
                errorElement: <ErrorLayout locale={locale}/>,
                children: [
                    {
                        path: `/${locale}/*`,
                        element: <Navigate to={`/${locale}/404`} />,
                    },
                    {
                        path: `/${locale}/404`,
                        element: <Missing />
                    },
                    {
                        path: `/${locale}/thankyou`,
                        element: <ThankYou />
                    },
                    {
                        path: `/${locale}`,
                        element: <Landing />
                    },
                    {
                        path: `/${locale}/contact`,
                        element: <Outlet />,
                        children: [
                            {
                                path: `/${locale}/contact/*`,
                                element: <Navigate to={`/${locale}/404`} />
                            },
                            {
                                path: `/${locale}/contact`,
                                element: <Contact />
                            },
                            {
                                path: `/${locale}/contact/form`,
                                element: <ContactFormPage formid="contact-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}/>
                            },
                        ]
                    },
                    {
                        path: `/${locale}/services`,
                        element: <Outlet />,
                        children: [
                            {
                                path: `/${locale}/services/*`,
                                element: <Navigate to={`/${locale}/404`} />
                            },
                            {
                                path: `/${locale}/services`,
                                element: <Services />
                            },
                            {
                                path: `/${locale}/services/car-damage`,
                                element:
                                <Service id="car_damage">
                                    <ServiceForm formid="car-damage-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Asistență daune auto" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/air-conditioning`,
                                element:
                                <Service id="air_conditioning">
                                    <ServiceForm formid="air-conditioning-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Climatizare auto" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/tinware`,
                                element:
                                <Service id="tinware">
                                    <ServiceForm formid="tinware-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Tinichigerie" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/mechanics`,
                                element:
                                <Service id="mechanics">
                                    <ServiceForm formid="mechanics-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Mecanică" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/wheel-geometry`,
                                element:
                                <Service id="wheel_geometry">
                                    <ServiceForm formid="wheel-geometry-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Geometrie roți 3D" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/paint-shop`,
                                element:
                                <Service id="paint_shop">
                                    <ServiceForm formid="paint-shop-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Vopsitorie" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/headlights`,
                                element:
                                <Service id="headlights">
                                    <ServiceForm formid="headlights-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Polimerizare faruri" />
                                    </ServiceForm>
                                </Service>,
                            },
                            {
                                path: `/${locale}/services/computerized-test`,
                                element:
                                <Service id="computerized_test">
                                    <ServiceForm formid="computerized-test-form" emailserviceid={emailserviceid} emailtemplateid={emailtemplateid} publickey={publickey} _next={`/${locale}/thankyou`}>
                                        <input type="hidden" name="service" value="Testare computerizată" />
                                    </ServiceForm>
                                </Service>,
                            },
                        ]
                    },
                    {
                        path: `/${locale}/terms`,
                        element: <TermsAndConditions />
                    },
                    {
                        path: `/${locale}/thankyou`,
                        element: <ThankYou />
                    },
                ],
            }

    return result;
}


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Navigate to="/ro" replace={true}/>,
        children: [
            {
                path: "/",
                element: <Navigate to="/ro" replace={true}/>,
            },
            makeLocalePath("ro"),
            makeLocalePath("en"),
        ]
    },
], basename);


function ErrorLayout({locale}) {
    return (
        <>
            <Helmet>
                <html lang={locale} />
            </Helmet>
            <Header />
            <Missing />
            <Footer />
        </>
    );
}

function PageLayout({locale}) {
    return (
        <>
            <Helmet>
                <html lang={locale} />
            </Helmet>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


