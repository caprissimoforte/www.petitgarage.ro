import { ro } from "./ro.js";
import { en } from "./en.js";

export function getLocaleFlag(locale) {
    switch (locale) {
        case "ro":
            return (<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-ro" viewBox="0 0 640 480">
  <g fillRule="evenodd" strokeWidth="1pt">
    <path fill="#00319c" d="M0 0h213.3v480H0z"/>
    <path fill="#ffde00" d="M213.3 0h213.4v480H213.3z"/>
    <path fill="#de2110" d="M426.7 0H640v480H426.7z"/>
  </g>
</svg>);
        case "en":
            return (
<svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-us" viewBox="0 0 640 480">
  <path fill="#bd3d44" d="M0 0h640v480H0"/>
  <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
  <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
  <marker id="us-a" markerHeight="30" markerWidth="30">
    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
  </marker>
  <path fill="none" markerMid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"/>
</svg>
);
        default:
            return (<></>);
    }
}

export function getLocaleName(locale) {
    switch (locale) {
        case "ro":
            return "Română";
        case "en":
            return "English";
        default:
            return undefined;
    }
}

export function getLocaleData(locale) {
    switch (locale) {
        case "ro":
            return ro;
        case "en":
            return en;
        default:
            return undefined;
    }
}
