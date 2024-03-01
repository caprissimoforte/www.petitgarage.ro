import "./contactform.css";
import "../components/form.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

import { useLocale, useTranslation } from "../module/i18n.js";
import { getLocaleName } from "../locale/locale.js";

import bgimg from "../assets/garagelogo.png";

const regex_tel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function ContactForm({ formid, emailserviceid, emailtemplateid, publickey, captchakey, _next}) {
    const [val, setVal] = useState("");

    const locale = useLocale();
    const localeName = getLocaleName(locale);
    const translate = useTranslation();
    const navigate = useNavigate();

    const id_service = `${formid}-service`;
    const id_name = `${formid}-name`;
    const id_tel = `${formid}-tel`;
    const id_email = `${formid}-email`;

    const id_brand = `${formid}-brand`;
    const id_model = `${formid}-model`;
    const id_year = `${formid}-year`;
    const id_plate = `${formid}-plate`;
    const id_desc = `${formid}-desc`;

    const id_submit = `${formid}-submit`;

    const autogrow = event => {
        const t = event.target;

        t.style.height = "";
        t.style.height = `${t.scrollHeight}px`;

        if (validateInput(t)) {
            event.target.parentNode.style.border = "4px transparent solid";
            event.target.parentNode.style.borderBottom = "4px black solid";
        }
        else {
            event.target.parentNode.style.border = "4px red solid";
        }
    };

    const handleInput = event => {
        if (validateInput(event.target)) {
            event.target.parentNode.style.border = "4px transparent solid";
            event.target.parentNode.style.borderBottom = "4px black solid";
        }
        else {
            event.target.parentNode.style.border = "4px red solid";
        }
    }

    const handleName = event => {
        if (validateName(event.target)) {
            event.target.parentNode.style.border = "4px transparent solid";
            event.target.parentNode.style.borderBottom = "4px black solid";
        }
        else {
            event.target.parentNode.style.border = "4px red solid";
        }
    }

    const handleTel = event => {
        if (validateTel(event.target)) {
            event.target.parentNode.style.border = "4px transparent solid";
            event.target.parentNode.style.borderBottom = "4px black solid";
        }
        else {
            event.target.parentNode.style.border = "4px red solid";
        }
    }

    const handleEmail = event => {
        if (validateEmail(event.target)) {
            event.target.parentNode.style.border = "4px transparent solid";
            event.target.parentNode.style.borderBottom = "4px black solid";
        }
        else {
            event.target.parentNode.style.border = "4px red solid";
        }
    }

    const validateInput = (id) => {
        const value = id.value;

        if (value.length < 3) {
            return false;
        }

        return true;
    }

    const validateName = (id) => {
        const name = id.value;

        if (name.length < 3) {
            return false;
        }

        return true;
    }

    const validateTel = (id) => {
        const tel = id.value;

        if (tel.length === 0) {
            return false;
        }

        if (!regex_tel.test(tel)) {
            return false;
        }

        return true;
    }

    const validateEmail = (id) => {
        const email = id.value;

        if (email.length === 0) {
            return false;
        }

        if (!regex_email.test(email)) {
            return false;
        }

        return true;
    }

    const [captchaRes, setCaptchaRes] = useState(undefined);

    const handlecaptcha = (value) => {
        setCaptchaRes(value);
    }

    const validate = event => {
        const name = document.getElementById(id_name);
        const tel = document.getElementById(id_tel);
        const email = document.getElementById(id_email);
        const submit = document.getElementById(id_submit);

        if (!validateName(name)) {
            event.preventDefault();
            return;
        }

        if (!validateTel(tel)) {
            event.preventDefault();
            return;
        }

        if (!validateEmail(email)) {
            event.preventDefault();
            return;
        }

        if (captchaRes === "") {
            event.preventDefault();
            return;
        }

        event.preventDefault();
        submit.disabled = true;
        emailjs
            .sendForm(emailserviceid, val === "Centru constatare daune" ? "tibitemplate" : emailtemplateid, document.getElementById(formid), {
                publicKey: publickey,
                "g-recaptcha-response": captchaRes,
            })
            .then(
                () => {
                    navigate(_next);
                },
                (error) => {
                    console.log("Failed to send contact form...", error.text);
                    alert(translate(locale, "form_failurealert"));
                    submit.disabled = false;
                },
            );
    };

    const handleChange = event => {
        setVal(event.target.value);
    };

    const date = new Date();
    const yearoptions = [];

    for (let y = date.getFullYear(); y >= 1950; y--) {
        yearoptions.push(<option key={y} value={y}>{y}</option>);
    }

    return (
        <main className="contactform_main">
            <div className="contactform-children-wrapper" style={{
                backgroundImage: `url(${bgimg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <div className="contactform-children">

                    <div className="service-form-container">
                        <form action="?" method="POST" onSubmit={validate} id={formid}>
                            <input type="hidden" name="locale" value={`${locale} ( ${localeName} )`} />
                    
                            <h1 className="contact-heading">{translate(locale, "contact_heading")}</h1>

                            <span className="form-field" style={{ marginBottom: "24px" }}>
                                <select defaultValue="default" form={formid} id={id_service} name="service" onChange={handleChange} required>
                                    <option disabled hidden value="default">{translate(locale, "form_selectaservice")}</option>
                                    <option value="Centru constatare daune">{translate(locale, "services_car_damage")}</option>
                                    <option value="Climatizare auto">{translate(locale, "services_air_conditioning")}</option>
                                    <option value="Mecanică">{translate(locale, "services_mechanics")}</option>
                                    <option value="Tinichigerie">{translate(locale, "services_tinware")}</option>
                                    <option value="Geometrie roți 3D">{translate(locale, "services_wheel_geometry")}</option>
                                    <option value="Vopsitorie">{translate(locale, "services_paint_shop")}</option>
                                    <option value="Polimerizare faruri">{translate(locale, "services_headlights")}</option>
                                    <option value="Testare computerizată">{translate(locale, "services_computerized_test")}</option>
                                </select>
                            </span>


                            <div className="form-collapsible-wrapper" style={{gridTemplateRows: val !== "" ? "1fr" : "0fr"}}>
                                <div className="form-collapsible">
                                    <span className="form-half-field-wrapper">
                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                            <input onChange={handleName} form={formid} type="text" id={id_name} name="name" required placeholder={translate(locale, "form_placeholder_name")} />
                                        </div>

                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                                            <input onChange={handleTel} form={formid} type="tel" id={id_tel} name="phone" required placeholder={translate(locale, "form_placeholder_phone")} />
                                        </div>
                                    </span>

                                    <div className="form-field">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                                        <input onChange={handleEmail} form={formid} type="email" id={id_email} name="email" required placeholder={translate(locale, "form_placeholder_email")} />
                                    </div>

                                    <span className="form-half-field-wrapper">
                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z"/></svg>
                                            <input onChange={handleInput} form={formid} type="text" id={id_brand} name="brand" required placeholder={translate(locale, "form_placeholder_brand")} />
                                        </div>
                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
                                            <input onChange={handleInput} form={formid} type="text" id={id_model} name="model" required placeholder={translate(locale, "form_placeholder_model")} />
                                        </div>
                                    </span>

                                    <span className="form-half-field-wrapper">
                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                            <select defaultValue="default" form={formid} id={id_year} name="year" required>
                                                <option disabled hidden value="default">{translate(locale, "form_placeholder_year")}</option>
                                                {yearoptions}
                                            </select>
                                        </div>

                                        <div className="form-half-field">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-280v-400h720v400H120Zm80-80h560v-240H200v240Zm0 0v-240 240Z"/></svg>
                                            <input onChange={handleInput} form={formid} type="text" id={id_plate} name="plate" required placeholder={translate(locale, "form_placeholder_plate")} />
                                        </div>
                                    </span>

                                    <div className="form-field">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/></svg>
                                        <textarea onChange={autogrow} form={formid} type="text" id={id_desc} rows="5" name="desc" required placeholder={translate(locale, "form_placeholder_desc")}></textarea>
                                    </div>

                                    <ReCAPTCHA sitekey={captchakey} onChange={handlecaptcha} />

                                    <input className="cta" form={formid} type="submit" id={id_submit} value={translate(locale, "form_btn_submit")} />

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default ContactForm;
