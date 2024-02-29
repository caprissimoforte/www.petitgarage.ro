import "./landing.css";

import { useState, useEffect } from "react";
import { useLocale, useTranslation, usePath } from "../module/i18n.js";

import Hero from "../components/hero.js";
import { SuggestionForm } from "../components/form.js";
import { CallToActionButton, CallToActionCard } from "../components/call-to-action.js";
import Testimonial from "../components/testimonial.js";
import { EmployeesCarousel } from "../components/employees-carousel.js";

import showcaseimg from "../assets/27.png";
import showcaseimg1 from "../assets/42.png";

/* Hero slideshow images */
import LandingImg from "../assets/37.png";
import LandingImgMobile from "../assets/37-mobile.png";
import AsistentaDauneImg from "../assets/28.png";
import AsistentaDauneImgMobile from "../assets/28-mobile.png";
import ClimatizareImg from "../assets/32.png";
import ClimatizareImgMobile from "../assets/32-mobile.png";
import MecanicaImg from "../assets/13.png";
import MecanicaImgMobile from "../assets/13-mobile.png";
import TinichigerieImg from "../assets/21.png";
import TinichigerieImgMobile from "../assets/21-mobile.png";
import PolimerizareFaruriImg from "../assets/43.png";
import PolimerizareFaruriImgMobile from "../assets/43-mobile.png";
import GeometrieRotiImg from "../assets/38.png";
import GeometrieRotiImgMobile from "../assets/38-mobile.png";
import VopsitorieImg from "../assets/30.png";
import VopsitorieImgMobile from "../assets/30-mobile.png";
import TestareComputerizataImg from "../assets/40.png";
import TestareComputerizataImgMobile from "../assets/40-mobile.png";

/* Testimonials */
import TestimonialImg1 from "../assets/18.png";
import TestimonialImg2 from "../assets/25.png";
import TestimonialImg3 from "../assets/36.png";

import CTACardImg from "../assets/35.png";

function Landing() {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const locale = useLocale();
    const translate = useTranslation();

    const images = [
        {
            children:
                <>
                <h1>PETIT GARAGE</h1>
                <div style={{display: "flex", alignItems: "flex-start"}}>
                <p>{translate(locale, "landing_hero_hours_open")}</p>
                <p>{translate(locale, "landing_hero_hours_closed")}</p>
                </div>
                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <CallToActionButton route={`/${locale}/contact`}>
                        <p>{translate(locale, "landing_btn_seeservices")}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </CallToActionButton>
                </div>
                </>,
            image: isMobile ? LandingImgMobile : LandingImg,
            bgpos: "center",
        },
        {
            children:
                <h1>{translate(locale, "services_car_damage").toUpperCase()}</h1>,
            image: isMobile ? AsistentaDauneImgMobile : AsistentaDauneImg,
            bgpos: "center",
            align: "flex-start",
        },
        {
            children:
                <h1>{translate(locale, "services_air_conditioning").toUpperCase()}</h1>,
            image: isMobile ? ClimatizareImgMobile : ClimatizareImg,
            bgpos: isMobile ? "center" : "top center",
        },
        {
            children:
                <h1>{translate(locale, "services_mechanics").toUpperCase()}</h1>,
            image: isMobile ? MecanicaImgMobile : MecanicaImg,
            bgpos: isMobile ? "center" : "35% center",
            align: "flex-end",
        },
        {
            children:
                <h1>{translate(locale, "services_tinware").toUpperCase()}</h1>,
            image: isMobile ? TinichigerieImgMobile : TinichigerieImg,
            bgpos: "center",
        },
        {
            children:
                <h1>{translate(locale, "services_headlights").toUpperCase()}</h1>,
            image: isMobile ? PolimerizareFaruriImgMobile : PolimerizareFaruriImg,
            bgpos: isMobile ? "center" : "35% center",
            align: "flex-end",
            down: isMobile ? "initial" : "25%",
        },
        {
            children:
                <h1>{translate(locale, "services_wheel_geometry").toUpperCase()}</h1>,
            image: isMobile ? GeometrieRotiImgMobile : GeometrieRotiImg,
            bgpos: isMobile ? "center" : "40% center",
            up: isMobile ? "initial" : "25%",
        },
        {
            children:
                <h1>{translate(locale, "services_paint_shop").toUpperCase()}</h1>,
            image: isMobile ? VopsitorieImgMobile : VopsitorieImg,
            bgpos: isMobile ? "center" : "55% center",
        },
        {
            children:
                <h1>{translate(locale, "services_computerized_test").toUpperCase()}</h1>,
            image: isMobile ? TestareComputerizataImgMobile : TestareComputerizataImg,
            bgpos: "center",
            align: "flex-end",
            down: isMobile ? "initial" : "25%",
        },
    ];

    return (
        <main className="landing_main">
            <Hero items={images} interval={4000} />

            <div className="landing-form-wrapper" id="service-background">
                <div className="garage-info">
                    <h1>{translate(locale, "landing_suggestion_flavour")}</h1>
                </div>
                <SuggestionForm />
            </div>

            <span className="aboutus">
                <div className="aboutus-img-desktop" style={{
                        backgroundImage: `url(${showcaseimg1})`,
                        backgroundPosition: "45% center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}>
                </div>
                <img className="aboutus-img-mobile" src={showcaseimg1} alt="" />
                <div className="aboutus-info">
                    {translate(locale, "landing_about")}
                </div>
            </span>

            <EmployeesCarousel />

            <img loading="lazy" src={showcaseimg} alt="" />

            <div className="testimonial-container">
                <h1>{translate(locale, "landing_testimonials")}</h1>
                <Testimonial image={TestimonialImg1}>
                    {translate(locale, "testimonial_1")}
                </Testimonial>
                <Testimonial image={TestimonialImg2}>
                    {translate(locale, "testimonial_2")}
                </Testimonial>
            </div>


            <CallToActionCard image={CTACardImg}>
                <h1>{translate(locale, "landing_cta_concerns")}</h1>
                <CallToActionButton route={`/${locale}/contact`}>
                    <p>{translate(locale, "landing_btn_contactus")}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </CallToActionButton>
            </CallToActionCard>

        </main>
    );
}

export default Landing;
