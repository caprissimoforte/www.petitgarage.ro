import "./employees-carousel.css";

import { useEffect, useState } from "react";
import PersonCard from "./person-card.js";
import { useLocale, useTranslation } from "../module/i18n.js";

/* Employees */
import EmployeeAntonioTrifan from "../assets/Antonio_Trifan.jpeg";
import EmployeeBogdanCeausu from "../assets/Bogdan_Ceausu.png";
import EmployeeBogdanMeret from "../assets/Bogdan_Meret.jpg";
import EmployeeCameliaDraghiciu from "../assets/Camelia_Draghiciu.png";
import EmployeeCristianGeorgescu from "../assets/Cristian_Georgescu.jpg";
import EmployeeMadalinStefan from "../assets/Madalin_Stefan.jpeg";
import EmployeeTiberiuEnache from "../assets/Tiberiu_Enache.jpg";
import EmployeeValentinSima from "../assets/Valentin_Sima.png";

export function EmployeesCarousel() {
    const locale = useLocale();
    const translate = useTranslation();

    const step = 1;
    const items = [
        <PersonCard image={EmployeeCristianGeorgescu} name="Cristian" surname="Georgescu" title={translate(locale, "employee_ceo")} />,
        <PersonCard image={EmployeeValentinSima} name="Valentin" surname="Sima" title={translate(locale, "employee_cto")} />,
        <PersonCard image={EmployeeBogdanMeret} name="Bogdan" surname="Mereț" title={translate(locale, "employee_coo")} />,
        <PersonCard image={EmployeeTiberiuEnache} name="Tiberiu" surname="Enache" title={translate(locale, "employee_car_damage")} />,
        <PersonCard image={EmployeeCameliaDraghiciu} name="Camelia" surname="Draghiciu" title={translate(locale, "employee_cfo")} />,
        <PersonCard image={EmployeeAntonioTrifan} name="Antonio" surname="Trifan" title={translate(locale, "employee_mechanic")} />,
        <PersonCard image={EmployeeBogdanCeausu} name="Bogdan" surname="Ceaușu" title={translate(locale, "employee_bodyworks")} />,
        <PersonCard image={EmployeeMadalinStefan} name="Madalin" surname="Stefan" title={translate(locale, "employee_mechanic")} />,
    ];


    const container_gap = 32;
    const start_index = items.length/2;
    const count = items.length;

    const [index, setIndex] = useState(0);
    const [prev_index, setPrevIndex] = useState(0);
    const _prev_index = index-step >= 0 ? index-step : count-1;
    const _next_index = index+step < count ? index+step : 0;
    const [swiping, setSwiping] = useState(false);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const slide_next = () => {
        setPrevIndex(index);
        setIndex(_next_index);
    }

    const slide_prev = () => {
        setPrevIndex(index);
        setIndex(_prev_index);
    }

    const animate = () => {
        const slideshow = document.getElementById("employee-carousel");
        const nodes = slideshow.getElementsByClassName("employee");

        for (let i=0; i<nodes.length; i++) {
            const node = nodes[i];
            const node_width = node.getBoundingClientRect()["width"];

            let k = (index + 1 - start_index) % count;
            // adding 0.5 is a hack but i can't take it off now otherwise slideshow is off
            let g = i - count + 0.5;

            if (i > index + count/2) {
                k += count;
            }
            else if (i < index - count/2) {
                k -= count;
            }

            const leftmargin = (i - index + start_index + (count/4)) % count;
            const rightmargin = (index - i + start_index + (count/4)) % count;

            if (leftmargin === count/2 - 1 || leftmargin === count/2 - 2) {
                node.style.opacity = "0";
                node.onclick = () => {
                    return false;
                }
            }
            else if (rightmargin === count/2 - 1 || rightmargin === count/2 - 2) {
                node.style.opacity = "0";
                node.onclick = () => {
                    return false;
                }
            }
            else {
                node.style.opacity = "1";
                node.onclick = () => {
                    setPrevIndex(index);
                    setIndex(i);
                }
            }

            const raw_pos = (k * node_width);
            const raw_gap = (g * container_gap);
            node.style.right = `${raw_pos + raw_gap}px`;
        }
    }

    useEffect(() => {
        animate();
    });

    const startSwipe_touch = event => {
        const touch = event.changedTouches[0];
        setX(touch.screenX);
        setY(touch.screenY);
        setSwiping(true);
    };

    const endSwipe_touch = event => {
        const touch = event.changedTouches[0];
        const errormargin = 0.1;
        const xmargin = x - touch.screenX;
        const ymargin = y - touch.screenY;
        const totalmargin = xmargin + ymargin;
        const iserror = Math.abs(xmargin/totalmargin) + errormargin < Math.abs(ymargin/totalmargin); 

        if (touch.screenX < x && !iserror) {
            slide_next();
        }
        else if (touch.screenX > x && !iserror) {
            slide_prev();
        }

        setX(0);
        setY(0);
        setSwiping(false);
    };

    const cancelSwipe_touch = event => {
        setX(0);
        setY(0);
        setSwiping(false);
    };

    const handleScroll = event => {
        if (event.deltaX < 0) {
            slide_next();
        }
        else if (event.deltaX > 0) {
            slide_prev();
        }
    };

    const standout_min = index - 0;
    const standout_max = index + 0;
    return (
        <div
            onTouchStart={startSwipe_touch} onTouchEnd={endSwipe_touch} onTouchCancel={cancelSwipe_touch}
            onScroll={handleScroll}
            className="employees-carousel-container">
            <h1>{translate(locale, "landing_ourteam")}</h1>
            <div className="employees-carousel" id="employee-carousel">
                <svg className="employee-arrow" style={{left: 0}} onClick={slide_prev} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                {items.map((item, i) => {
                    const standout = (i >= standout_min && i <= standout_max);
                    return (
                        <div className={standout ? "employee standout" : "employee"} key={i}>
                            {item}
                        </div>
                    );
                })}
                <svg className="employee-arrow" style={{right: 0}} onClick={slide_next} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
            </div>
        </div>
    );
}
