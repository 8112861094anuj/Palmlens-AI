import PageLayout from "../../components/layout/PageLayout";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import CTA from "./sections/CTA";
import FAQ from "./sections/FAQ";

function Home() {
    return (
       <PageLayout>

   <Hero />

<Features />

<HowItWorks />

<HowItWorks />

<CTA />

<FAQ />
</PageLayout>
    );
}

export default Home;