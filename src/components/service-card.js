import "./service-card.css";
import { useNavigate } from "react-router-dom";

export function ServiceOption({title, value}) {
    const navigate = useNavigate();

    const focusService = () => {
        navigate("/ro", { state: {
            selectedServiceId: value
        }});
    }

    return (
        <div className="service-option" onClick={focusService}>
            <p>{title}</p>
        </div>
    );
}

export function ServiceCard({children, icon, title, text}) {
    return (
        <div className="service-card">
            {icon}
            <h1>{title}</h1>
            <div className="collapsible-wrapper">
                <div className="collapsible">
                    <p>{text}</p>
                    {children}
                </div>
            </div>
        </div>
    );
}
