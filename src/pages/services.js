import "./services.css";

import { useLocale, useTranslation } from "../module/i18n.js";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FeatureCard from "../components/feature-card.js";

import ServiceSpan from "../components/service-span.js";

import Insurers from "../components/insurers.js";

import ServicesHeroImage from "../assets/2.png";

import AsistentaDauneImg from "../assets/39.png";
import ClimatizareImg from "../assets/32.png";
import MecanicaImg from "../assets/13.png";
import TinichigerieImg from "../assets/21.png";
import PolimerizareFaruriImg from "../assets/43.png";
import GeometrieRotiImg from "../assets/38.png";
import VopsitorieImg from "../assets/30.png";
import TestareComputerizataImg from "../assets/40.png";

function Services() {
    const locale = useLocale();
    const translate = useTranslation();

    const { state } = useLocation();
    const { selectedServiceId } = state || {};

    const scroll = (target) => {
        const t = document.getElementById(target);
        t.scrollIntoView({ behavior: "instant", block: "center", inline: "center" });
    }

    useEffect(() => {
        if (selectedServiceId) {
            scroll(selectedServiceId);
        }
        window.history.replaceState({}, "");
    }, [selectedServiceId]);

    return (
        <main className="services_main">
            <div className="services">

                <ServiceSpan id="car-damage" image={AsistentaDauneImg} loading="eager" title={translate(locale, "services_car_damage")}>
                    {translate(locale, "services_car_damage_info")}
                    <Insurers />
                </ServiceSpan>

                <ServiceSpan id="air-conditioning" image={ClimatizareImg} loading="lazy" title={translate(locale, "services_air_conditioning")}>
                    <p>{translate(locale, "services_air_conditioning_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="mechanics" image={MecanicaImg} loading="lazy" title={translate(locale, "services_mechanics")}>
                    <p>{translate(locale, "services_mechanics_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="tinware" image={TinichigerieImg} loading="lazy" title={translate(locale, "services_tinware")}>
                    <p>{translate(locale, "services_tinware_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="wheel-geometry" image={GeometrieRotiImg} loading="lazy" title={translate(locale, "services_wheel_geometry")}>
                    <p>{translate(locale, "services_wheel_geometry_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="paint-shop" image={VopsitorieImg} loading="lazy" title={translate(locale, "services_paint_shop")}>
                    <p>{translate(locale, "services_paint_shop_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="headlights" image={PolimerizareFaruriImg} loading="lazy" title={translate(locale, "services_headlights")}>
                    <p>{translate(locale, "services_headlights_info")}</p>
                </ServiceSpan>

                <ServiceSpan id="computerized-test" image={TestareComputerizataImg } loading="lazy" title={translate(locale, "services_computerized_test")}>
                    <p>{translate(locale, "services_computerized_test_info")}</p>
                </ServiceSpan>

            </div>

            <span className="feature-cards-container" style={{
                backgroundImage: `url(${ServicesHeroImage})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>

                <FeatureCard title={translate(locale, "services_card_1_title")} text={translate(locale, "services_card_1_text")}/>
                <FeatureCard title={translate(locale, "services_card_3_title")} text={translate(locale, "services_card_3_text")}/>

            </span>

        </main>
    );
}


export default Services;
