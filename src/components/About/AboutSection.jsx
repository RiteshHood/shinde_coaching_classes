import finalVector from "../../assets/images/personalDevlopment.jpg";

export default function AboutSection() {

  return (

    <section className="about-section container">

      <div className="about-image">

        <img
          src={finalVector}
          alt="About Shinde Coaching Classes"
        />

      </div>

      <div className="about-content">

        <span className="section-tag">
           WE ARE
        </span>

        <h2>
          Building Strong Foundations for a Brighter Future
        </h2>

        <p>
          Shinde Coaching Classes is committed to providing quality education
          for students from Class 5th to 10th through concept-based teaching,
          regular practice, and continuous guidance.
        </p>

        <p>
          Our experienced faculty focuses on strengthening fundamentals,
          improving confidence, and helping every student reach their academic
          potential.
        </p>

        <p>
          Beyond classroom teaching, we encourage discipline, consistency,
          curiosity, and a positive attitude towards learning.
        </p>

      </div>

    </section>

  );

}