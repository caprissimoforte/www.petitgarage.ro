import "./testimonial.css";

export default function Testimonial({ children, image }) {
    return (
        <div className="testimonial-wrapper" style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: "table-cell",
            }}>
            <div className="testimonial">
                <div className="testimonial-children">
                    {children}
                </div>
            </div>
        </div>
    );
}
