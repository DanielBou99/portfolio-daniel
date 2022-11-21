import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React, { useState, useEffect } from "react";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Java",
    "Angular",
    "React",
    "Spring",
    "JPA",
    "Kubernets",
    "Docker",
    "Git",
    "Rancher",
  ];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(10);
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    console.log(i);
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bem-vindo ao meu Portfólio</span>
            <h1>
              {`Oi, meu nome é Daniel e tenho conhecimento em `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Sou um desenvolvedor full stack. Amo o que faço, por isso me
              dedico muito para aprender mais a cada dia. O meu conhecimento
              principal é em Java e Angular mas também gosto de mexer com
              Kotlin, React, AWS e outras tecnologias.
            </p>
            <a
              href="https://www.linkedin.com/in/daniel-bou-256530121/"
              target="_blank"
              rel="noreferrer noopener"
            >
            <button onClick={() => console.log("connect")}>
              Vamos nos conectar <ArrowRightCircle size={25} />
            </button>
            </a>
          </Col>
          <Col Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
