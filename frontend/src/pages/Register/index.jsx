import "./Register.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function Register() {
    return (
        <PageLayout>

            <section className="login-page">

                <div className="login-card">

                    <h1>Create Account</h1>

                    <p>
                        Create your PalmLens account to save reports and access Future Chat.
                    </p>

                    <form>

                        <input
                            type="text"
                            placeholder="Full Name"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                        />

                        <Button>
                            Create Account
                        </Button>

                    </form>

                    <p className="login-footer">
                        Already have an account?
                        <a href="/login"> Login</a>
                    </p>

                </div>

            </section>

        </PageLayout>
    );
}

export default Register;
