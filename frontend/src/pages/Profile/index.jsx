import "./Profile.css";
import PageLayout from "../../components/layout/PageLayout";

function Profile() {
    return (
        <PageLayout>
            <section className="simple-page">
                <div className="simple-container">
                    <h1>Profile</h1>
                    <p>Manage your account information.</p>
                </div>
            </section>
        </PageLayout>
    );
}

export default Profile;
