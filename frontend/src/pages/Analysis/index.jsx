import "./Analysis.css";
import PageLayout from "../../components/layout/PageLayout";

function Analysis() {
    return (
        <PageLayout>

            <section className="analysis-page">

                <div className="analysis-container">

                    <h1>Analyzing Your Palm</h1>

                    <p>
                        Please wait while PalmLens AI examines your palm lines.
                    </p>

                    <div className="progress-card">

                        <div className="progress-bar">
                            <div className="progress-fill"></div>
                        </div>

                        <ul>

                            <li>✓ Image Uploaded</li>
                            <li>✓ Palm Detected</li>
                            <li>• Identifying Major Lines...</li>
                            <li>• Preparing AI Report...</li>

                        </ul>

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default Analysis;
