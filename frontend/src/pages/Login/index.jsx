import "./Login.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function Login() {
    return (
        <PageLayout>

            <section className="login-page">

                <div className="login-card">

                    <h1>Welcome Back</h1>

                    <p>
                        Sign in to continue your PalmLens journey.
                    </p>

                    <form>

                        <input
                            type="email"
                            placeholder="Email Address"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                        />

                        <Button>
                            Login
                        </Button>

                    </form>

                    <p className="login-footer">
                        Don't have an account?
                        <a href="/register"> Create one</a>
                    </p>

                </div>

            </section>

        </PageLayout>
    );
}

export default Login;
