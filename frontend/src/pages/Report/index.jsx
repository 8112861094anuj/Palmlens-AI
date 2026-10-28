import "./Report.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function Report() {
    return (
        <PageLayout>

            <section className="report-page">

                <div className="report-container">

                    <h1>Your Palm Report</h1>

                    <p>
                        This is a preview of your AI-generated Hindu palm reading.
                    </p>

                    <div className="report-card">

                        <div className="report-section">
                            <h3>Life Line</h3>
                            <p>Placeholder interpretation.</p>
                        </div>

                        <div className="report-section">
                            <h3>Heart Line</h3>
                            <p>Placeholder interpretation.</p>
                        </div>

                        <div className="report-section">
                            <h3>Head Line</h3>
                            <p>Placeholder interpretation.</p>
                        </div>

                        <div className="report-section">
                            <h3>Fate Line</h3>
                            <p>Placeholder interpretation.</p>
                        </div>

                    </div>

                    <div className="report-actions">

                        <Button>
                            Download Report
                        </Button>

                        <Button variant="secondary">
                            Future Chat
                        </Button>

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default Report;
