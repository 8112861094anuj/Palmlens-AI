import "./Wallet.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function Wallet() {
    return (
        <PageLayout>

            <section className="wallet-page">

                <div className="wallet-container">

                    <h1>Wallet</h1>

                    <p>
                        Manage your credits, promo codes and premium features.
                    </p>

                    <div className="wallet-grid">

                        <div className="wallet-card">

                            <h3>Available Credits</h3>

                            <h2>0 Credits</h2>

                        </div>

                        <div className="wallet-card">

                            <h3>Premium Status</h3>

                            <h2>Free Plan</h2>

                        </div>

                    </div>

                    <div className="promo-box">

                        <input
                            type="text"
                            placeholder="Enter Promo Code"
                        />

                        <Button>
                            Apply
                        </Button>

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default Wallet;
