import "./map.css";

function Map() {
    return (
        <div className="map-wrapper">
            <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2824.9502146090454!2d26.00680050849424!3d44.924347952026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b249bc6b71fa29%3A0xdf61b6ca2f89e0e9!2sStrada%20Sondelor%2066%2C%20Ploie%C8%99ti%20100317!5e0!3m2!1sro!2sro!4v1634117659180!5m2!1sro!2sro" loading="lazy"></iframe>
        </div>
    );
}

export default Map;
