import "./Hero.css";
import Button from "../../../components/ui/Button";
import Container from "../../../components/ui/Container";
import ImagePlaceholder from "../../../components/common/ImagePlaceholder";


function Hero() {
    return (
        <section className="hero">

            <Container>

    <div className="hero-container">
                <div className="hero-content">

                    <h1>Ancient Wisdom. Modern Intelligence.</h1>

                    <p>
                        Discover AI-assisted Hindu palm reading through a
                        simple palm scan.
                    </p>

                    <div className="hero-buttons">

                        <Button>
                            Scan Your Palm
                        </Button>

                        <Button variant="secondary">
                            Learn More
                        </Button>

                    </div>

                </div>

                <ImagePlaceholder
    title="Hero Illustration"
    description="Minimal Hindu palm reading illustration. Temple Stone colour palette. Transparent PNG. Premium vector style. No gradients. Replace later with final artwork."
/>

               </div>

</Container>

</section>
    );
}

export default Hero;
