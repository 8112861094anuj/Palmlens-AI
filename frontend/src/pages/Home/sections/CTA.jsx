import "./CTA.css";
import Button from "../../../components/ui/Button";

function CTA() {

    return (

        <section className="cta">

            <div className="app-container">

                <h2>Ready To Discover What Your Palm Reveals?</h2>

                <p>
                    Capture your palm and receive your first AI-powered
                    Hindu palm reading in a few moments.
                </p>

                <div className="cta-buttons">

                    <Button>
                        Start Palm Reading
                    </Button>

                    <Button variant="secondary">
                        Explore Features
                    </Button>

                </div>

            </div>

        </section>

    );

}

export default CTA;
