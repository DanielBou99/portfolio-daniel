import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container id="projects">
        <Row>
          <Col size={12} sm={12} className="text-center text-sm-end footer-items">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/daniel-bou-256530121/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/DanielBou99"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={navIcon2} alt="Github" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
