import "./call-to-action.css";

export function CallToActionButton({ children, route, onClick }) {
    return (
        <a tabIndex="0" className="cta" onClick={onClick} href={route}>
            {children}
        </a>
    );
}

export function CallToActionCard({ children, image }) {
    return (
        <div className="cta-card-wrapper" style={{backgroundImage: `url(${image})`}}>
            <div className="cta-card">
                {children}
            </div>
        </div>
    );
}
