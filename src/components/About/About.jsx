import "./About.css";
import aboutImage from "../../assets/images/personalDevlopment.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {

    const highlights = [
        "Experienced Faculty",
        "Small Batch Size",
        "Weekly Tests & Assessments",
        "Personal Attention",
        "Affordable Fees",
        "Result Oriented Teaching"
    ];

    return (

        <section className="about">

            <div className="container about-container">

                <div className="about-image">

                    <img
                        src={aboutImage}
                        alt="Shinde Coaching Classes"
                    />

                </div>

                <div className="about-content">

                    <span className="section-tag">
                        ABOUT US
                    </span>

                    <h2>
                        Building Strong Foundations
                        for a Bright Future
                    </h2>

                    <p>

                        Shinde Coaching Classes is committed to
                        providing quality education for students
                        from 5th to 10th Standard of all boards.

                        Our teaching focuses on concept clarity,
                        discipline, confidence building and
                        continuous improvement through regular
                        practice and assessments.

                    </p>

                    <div className="about-list">

                        {
                            highlights.map((item,index)=>(

                                <div
                                    className="about-item"
                                    key={index}
                                >

                                    <FaCheckCircle/>

                                    <span>{item}</span>

                                </div>

                            ))
                        }

                    </div>

                    <button className="primary-btn">

                        Learn More

                    </button>

                </div>

            </div>

        </section>

    );

}