import "./Features.css";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaClipboardCheck,
  FaBookOpen,
  FaUserGraduate,
  FaUsers,
  FaAward,
  FaSchool,
} from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Expert Faculty",
    desc: "Experienced teachers focused on conceptual learning."
  },
  {
    icon: <FaLaptop />,
    title: "Digital Classroom",
    desc: "Modern smart classroom with digital teaching methods."
  },
  {
    icon: <FaClipboardCheck />,
    title: "Weekly Tests",
    desc: "Regular tests to monitor student progress."
  },
  {
    icon: <FaBookOpen />,
    title: "Study Material",
    desc: "Well-designed notes and practice material."
  },
  {
    icon: <FaUserGraduate />,
    title: "Personal Attention",
    desc: "Every student receives individual guidance."
  },
  {
    icon: <FaUsers />,
    title: "Small Batch Size",
    desc: "Better interaction between teacher and students."
  },
  {
    icon: <FaAward />,
    title: "Result Oriented",
    desc: "Focused preparation for excellent academic results."
  },
  {
    icon: <FaSchool />,
    title: "All Boards",
    desc: "Teaching for Maharashtra Board, CBSE and ICSE."
  }
];

export default function Features() {
  return (
    <section className="features section">
      <div className="container">

        <div className="section-title">
          
          <h2>Why Choose Shinde Coaching Classes?</h2>

          <p>
            We believe every student deserves quality education,
            personal guidance and the right environment to succeed.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-card" key={index}>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
