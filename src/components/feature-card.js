import "./feature-card.css";

function FeatureCard({ icon, title, text }) {
    return (
        <div className="feature-card">
            {icon}
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default FeatureCard;
