import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            I’m a tech enthusiast with a strong passion for{" "}
            <strong>cloud technologies</strong>, <strong>AI</strong>,{" "}
            <strong>machine learning</strong>, and <strong>Python/Django</strong> development.
            My focus is on leveraging these technologies to create efficient, scalable
            solutions that make an impact.
            <br />
            <br />
            🔹 <strong>Experience:</strong> <br />
            With a solid foundation in <strong>Python</strong> and <strong>Django</strong>, 
            I specialize in building robust, scalable applications. I’m also deeply involved in{" "}
            <strong>cloud computing</strong>, exploring how platforms like{" "}
            <strong>AWS</strong> can be used to enhance system performance and flexibility.
            <br />
            <br />
            🔹 <strong>AI & Machine Learning:</strong> <br />
            My curiosity and passion lie in <strong>AI</strong> and{" "}
            <strong>machine learning</strong>, where I’m constantly learning about the latest
            trends and innovations. I enjoy applying <strong>ML models</strong> to solve
            real-world problems, pushing the boundaries of what technology can achieve.
            <br />
            <br />
            🔹 <strong>Learning & Growth:</strong> <br />
            Currently, I’m working as an intern at <strong>Sakshath</strong>, where I’m
            expanding my expertise by learning <strong>Odoo</strong> and <strong>ERP systems</strong>.
            I’m committed to continuous learning, always striving to develop new skills that
            help me stay at the forefront of technology.
            <br />
            <br />
            🔹 <strong>Problem-Solving:</strong> <br />
            I thrive on tackling challenges using a systematic approach, utilizing my
            knowledge of <strong>Python</strong>, <strong>Django</strong>, and{" "}
            <strong>cloud computing</strong> to solve complex issues and deliver high-quality
            results.
          </p>
          <br />
          <p style={{ textAlign: "justify" }}>
            <strong>Beyond Tech:</strong> <br />
            When I’m not coding or learning, you’ll find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Articles on platforms like Hashnode, sharing my insights with the community
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about the latest developments in cloud, AI, and ML
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing the Cajon and other percussion instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking and Traveling to explore new places
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
          "Striving to build tech that matters, while crushing trails, exploring the world, and hitting the gym!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
