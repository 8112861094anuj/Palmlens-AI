import "./Features.css";

function Features() {

    const features = [
        {
            title: "AI Palm Reading",
            description: "Upload or capture your palm and receive a detailed Hindu palmistry analysis."
        },
        {
            title: "Future Chat",
            description: "Interact with your AI fortune guide after unlocking premium access."
        },
        {
            title: "Reading History",
            description: "Access previous palm readings and compare changes over time."
        }
    ];

    return (
        <section className="features">

            <div className="app-container">

                <h2>Core Features</h2>

                <div className="feature-grid">

                    {features.map((feature) => (

                        <div className="feature-card" key={feature.title}>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );

}

export default Features;
