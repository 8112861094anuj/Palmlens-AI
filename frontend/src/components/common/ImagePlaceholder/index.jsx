import "./index.css";

function ImagePlaceholder({
    width = "100%",
    height = "500px",
    title = "Placeholder",
    description = ""
}) {
    return (
        <div
            className="image-placeholder"
            style={{ width, height }}
        >
            <h3>{title}</h3>

            {description && <p>{description}</p>}
        </div>
    );
}

export default ImagePlaceholder;
