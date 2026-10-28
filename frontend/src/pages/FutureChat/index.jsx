import "./FutureChat.css";
import PageLayout from "../../components/layout/PageLayout";
import Button from "../../components/ui/Button";

function FutureChat() {
    return (
        <PageLayout>

            <section className="future-chat-page">

                <div className="future-chat-container">

                    <div className="chat-header">

                        <h1>Future Chat</h1>

                        <p>
                            Continue your conversation based on your latest palm reading.
                        </p>

                    </div>

                    <div className="chat-window">

                        <div className="chat-message ai">
                            Welcome. Ask anything related to your palm reading.
                        </div>

                        <div className="chat-message user">
                            What does my fate line indicate?
                        </div>

                    </div>

                    <div className="chat-input">

                        <input
                            type="text"
                            placeholder="Type your question..."
                        />

                        <Button>
                            Send
                        </Button>

                    </div>

                </div>

            </section>

        </PageLayout>
    );
}

export default FutureChat;
