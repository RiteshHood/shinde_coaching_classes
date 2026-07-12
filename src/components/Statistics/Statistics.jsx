import "./Statistics.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
    FaUserGraduate,
    FaAward,
    FaSmile,
    FaChalkboardTeacher,
} from "react-icons/fa";

export default function Statistics() {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats = [
        {
            icon: <FaUserGraduate />,
            number: 500,
            suffix: "+",
            title: "Happy Students",
        },
        {
            icon: <FaChalkboardTeacher />,
            number: 15,
            suffix: "+",
            title: "Years Experience",
        },
        {
            icon: <FaAward />,
            number: 98,
            suffix: "%",
            title: "Success Rate",
        },
        {
            icon: <FaSmile />,
            number: 100,
            suffix: "%",
            title: "Parent Satisfaction",
        },
    ];

    return (
        <section className="statistics" ref={ref}>

            <div className="container">

                <div className="section-title">

                    <span>OUR ACHIEVEMENTS</span>

                    <h2>Numbers Speak for Our Success</h2>

                    <p>
                        Every student matters to us.
                        Our results reflect years of dedication,
                        quality teaching and continuous improvement.
                    </p>

                </div>

                <div className="stats-grid">

                    {stats.map((item, index) => (

                        <div className="stat-card" key={index}>

                            <div className="stat-icon">
                                {item.icon}
                            </div>

                            <h3>
                                {item.number}
                                {item.suffix}
                            </h3>

                            <p>{item.title}</p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}