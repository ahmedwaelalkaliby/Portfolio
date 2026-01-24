import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple"> Ahmed Wael Alkaliby </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
              {/* I am currently employed as an External Instructor at Information technology institute.
            <br /> */}
            <br />
            I'm a Full Stack Web Developer with a strong focus on Front-End development. I specialize in the MERN Stack ( React.js, React Native, Next.js, Node.js ) and have hands-on experience building dynamic, responsive web applications and dashboards.
            <br />
            <br />
            I love creating polished, user-friendly UIs, debugging complex issues, and building platforms that solve real problems with a focus on SEO, user experience, performance, and accessibility.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
