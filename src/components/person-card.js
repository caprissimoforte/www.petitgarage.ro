import "./person-card.css";

function PersonCard({ image, name, surname, title }) {
    return (
        <div className="person-card">
            <img loading="lazy" className="person-image" src={image} alt={name} />
            <div className="person-textinfo">
                <div>
                    <h1>{name}</h1>
                    <h1>{surname}</h1>
                </div>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default PersonCard;
