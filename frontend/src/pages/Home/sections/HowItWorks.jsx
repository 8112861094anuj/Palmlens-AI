import "./HowItWorks.css";

const steps = [
    {
        number: "01",
        title: "Choose Your Hand",
        description: "Select your gender and use the traditionally preferred palm for analysis."
    },
    {
        number: "02",
        title: "Capture or Upload",
        description: "Use your webcam or upload a clear image from your device."
    },
    {
        number: "03",
        title: "AI Analysis",
        description: "Your palm is processed and interpreted using Hindu palmistry principles."
    },
    {
        number: "04",
        title: "Receive Report",
        description: "View a detailed report and continue with Future Chat if unlocked."
    }
];

function HowItWorks() {

    return (

        <section className="how-it-works">

            <div className="app-container">

                <h2>How It Works</h2>

                <div className="steps">

                    {steps.map((step) => (

                        <div className="step-card" key={step.number}>

                            <span>{step.number}</span>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default HowItWorks;
