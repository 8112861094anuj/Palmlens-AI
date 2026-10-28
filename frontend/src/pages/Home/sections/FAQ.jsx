import "./FAQ.css";

const faqs = [
    {
        question: "How accurate is the palm reading?",
        answer: "The application provides AI-assisted interpretations based on Hindu palmistry principles for educational and entertainment purposes."
    },
    {
        question: "Which hand should I scan?",
        answer: "The application asks your gender and automatically recommends the traditionally preferred hand according to Hindu palmistry."
    },
    {
        question: "Can I upload an image instead of using the camera?",
        answer: "Yes. You can either capture your palm using your webcam or upload a clear palm image from your device."
    },
    {
        question: "What is Future Chat?",
        answer: "Future Chat lets you ask questions related to your generated palm reading after unlocking the feature."
    }
];

function FAQ() {

    return (

        <section className="faq">

            <div className="app-container">

                <h2>Frequently Asked Questions</h2>

                <div className="faq-list">

                    {faqs.map((item) => (

                        <div className="faq-card" key={item.question}>

                            <h3>{item.question}</h3>

                            <p>{item.answer}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FAQ;
