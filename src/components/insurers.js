import "./insurers.css";

/* Vector logos */
import Omniasig from "../assets/omniasig-logo.svg";
import Grawe from "../assets/grawe-logo.jpg";
import Generali from "../assets/generali-logo.svg";
import Allianz from "../assets/allianz-logo.svg";
import Uniqa from "../assets/uniqa-logo.svg";

/* Raster logos */
import Groupama from "../assets/groupama-logo.png";
import AllianzTiriac from "../assets/allianz-tiriac-logo.png";
import Axeria from "../assets/axeria-logo.png";
import Asirom from "../assets/asirom-logo.png";
import Recrex from "../assets/recrex-logo.webp";


function Insurers() {
    return (
        <span className="insurers">
            
            <div className="insurer">
                <img loading="lazy" src={Omniasig} alt="" />
            </div>

            <div className="insurer bigger">
                <img loading="lazy" src={Groupama} alt="" />
            </div>

            <div className="insurer" style={{boxSizing: "border-box", padding: "8px", background: "#06337a"}}>
                <img loading="lazy" src={Axeria} alt="" />
            </div>

            <div className="insurer bigger">
                <img loading="lazy" src={Grawe} alt="" />
            </div>

            <div className="insurer">
                <img loading="lazy" src={Generali} alt="" />
            </div>

            <div className="insurer">
                <img loading="lazy" src={Allianz} alt="" />
            </div>

            <div className="insurer bigger">
                <img loading="lazy" src={AllianzTiriac} alt="" />
            </div>

            <div className="insurer bigger">
                <img loading="lazy" src={Asirom} alt="" />
            </div>

            <div className="insurer">
                <img loading="lazy" src={Uniqa} alt="" />
            </div>

            <div className="insurer bigger">
                <img loading="lazy" src={Recrex} alt="" />
            </div>

        </span>
    );
}

export default Insurers;
