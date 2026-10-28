import "./NotFound.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function NotFound() {
    return (
        <PageLayout>
            <section className="simple-page">
                <div className="simple-container">
                    <h1>404</h1>
                    <p>The page you are looking for does not exist.</p>
                    <Button>Go Home</Button>
                </div>
            </section>
        </PageLayout>
    );
}

export default NotFound;
