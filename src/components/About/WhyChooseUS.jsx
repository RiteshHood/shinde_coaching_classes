import "../../styles/AboutPage.css";
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClipboardCheck,
    FaAward
} from "react-icons/fa";

export default function WhyChooseUs() {

    const features = [

        {
            icon: <FaChalkboardTeacher />,
            title: "Experienced Faculty",
            desc: "Qualified teachers dedicated to every student's success."
        },

        {
            icon: <FaClipboardCheck />,
            title: "Regular Tests",
            desc: "Weekly assessments to track performance and progress."
        },

        {
            icon: <FaUserGraduate />,
            title: "Personal Attention",
            desc: "Small batches ensuring individual guidance for everyone."
        },

        {
            icon: <FaAward />,
            title: "Proven Results",
            desc: "Helping students consistently improve their academic performance."
        }

    ];

    return (

        <section className="why-section">

            <div className="container">

                <span className="section-tag">
                    WHY CHOOSE US
                </span>

                <h2>
                    What Makes Us Different?
                </h2>

                <div className="feature-grid">

                    {

                        features.map((item, index) => (

                            <div
                                className="feature-card"
                                key={index}
                            >

                                <div className="feature-icon">

                                    {item.icon}

                                </div>

                                <h3>

                                    {item.title}

                                </h3>

                                <p>

                                    {item.desc}

                                </p>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}