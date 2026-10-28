import "./ScanPalm.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";
import ImagePlaceholder from "../../components/common/ImagePlaceholder";

function ScanPalm() {
    return (
        <PageLayout>

            <section className="scan-page">

                <div className="scan-container">

                    <div className="scan-left">

                        <h1>Scan Your Palm</h1>

                        <p>
                            Upload a clear image or use your camera to capture your palm.
                        </p>

                        <div className="scan-buttons">

                            <Button>
                                Upload Image
                            </Button>

                            <Button variant="secondary">
                                Open Camera
                            </Button>

                        </div>

                    </div>

                    <div className="scan-right">

                        <ImagePlaceholder
                            height="420px"
                            title="Palm Capture Preview"
                            description="Placeholder for camera preview or uploaded palm image."
                        />

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default ScanPalm;
