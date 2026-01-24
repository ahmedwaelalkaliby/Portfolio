import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import appointment from "../../Assets/Projects/appointment-system.png";
import hatlyLLc from "../../Assets/Projects/hatlyLLc.png";
import hatlyDashboard from "../../Assets/Projects/HatlyDashboard.png";
import merchenStore from "../../Assets/Projects/merchen.png";
import exclusive from "../../Assets/Projects/exclusive.png";
import store from "../../Assets/Projects/Store.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <section style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </section>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appointment}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Appointment System"
              description="Find and book doctors application system.
Technologies: React.js, Redux Toolkit, React Query, Axios, React Hook Form, Zod, React Router, React Icons, ShadCn UI, Tailwind CSS."
              // ghLink="https://github.com/Abdulrahmanfawzy/Facebook-clone"
              demoLink="https://appointment-system-sepia.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hatlyLLc}
              imgStyle={{ height: "200px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              style={{ height: "300px" }}
              title="Hatly Website"
              description="Landing Website for Hatly Mobile App
Technologies: Next.js, Material UI, Framer Motion, React Awesome, React Icons."
              // ghLink="https://github.com/ahmedwaelalkaliby/Hatly-LLC"
              demoLink="https://www.hatly.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hatlyDashboard}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Hatly Dashboard"
              description="Dashboard to manage Hatly Mobile App.
Technologies: Next.js, Material UI, Framer Motion, React Awesome, React Icons."
              ghLink="https://github.com/ahmedwaelalkaliby/Hatly-Dashboard"
              demoLink="https://hatly-dashboard-three.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merchenStore}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Merchen Store E-Commerce"
              description="A modern e-commerce platform with responsive design, featuring user authentication and shopping functionality.
Technologies: React.Js, Firebase, React Router, Redux, Context Api, React Query, Formik, Yup, React Toast, Bootstrap, CSS Modules and Material UI."
              ghLink="https://github.com/ahmedwaelalkaliby/merchen-store-e-commerce"
              demoLink="https://merchen-store-e-commerce.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exclusive}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="Exclusive E-commerce"
              description="A modern e-commerce platform, featuring user authentication and shopping functionality.
Technologies: React.Js, Firebase, React Router, Redux, Context Api, React Query, Formik, Yup, React Toast, Bootstrap, CSS Modules and Material UI."
              ghLink="https://github.com/ahmedwaelalkaliby/exclusive-e-commerce"
              demoLink="https://exclusivewaelecommerce.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              imgStyle={{ height: "300px", objectFit: "cover" }} // Apply inline style here
              isBlog={false}
              title="A simple product cart.
Technologies: HTML, CSS, Vanilla JavaScript.

"
              demoLink="https://product-store-tau-opal.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
