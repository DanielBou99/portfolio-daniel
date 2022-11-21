import javaIcon from "../assets/img/java-icon.svg";
import angularIcon from "../assets/img/angular-icon.svg";
import springIcon from "../assets/img/spring-icon.svg";
import angularMaterialsIcon from "../assets/img/angularMaterials-icon.svg";
import awsIcon from "../assets/img/aws-icon.svg";
import kubernetesIcon from "../assets/img/kubernetes-icon.svg";
import gitIcon from "../assets/img/git-icon.svg";
import reactIcon from "../assets/img/react-icon.svg";
import primengIcon from "../assets/img/primeng-icon.svg";
import dockerIcon from "../assets/img/docker-icon.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    {
      title: "Java",
      imagem: javaIcon,
    },
    {
      title: "Angular",
      imagem: angularIcon,
    },
    {
      title: "Spring",
      imagem: springIcon,
    },
    {
      title: "PrimeNG",
      imagem: primengIcon,
    },
    {
      title: "Docker",
      imagem: dockerIcon,
    },
    {
      title: "AWS",
      imagem: awsIcon,
    },
    {
      title: "React",
      imagem: reactIcon,
    },
    {
      title: "Git",
      imagem: gitIcon,
    },
    {
      title: "Kubernetes",
      imagem: kubernetesIcon,
    },
    {
      title: "Angular Materials",
      imagem: angularMaterialsIcon,
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Habilidades</h2>
              <p>
                Essas são as tecnologias que eu possuo conhecimento, algumas eu
                tenho mais experiência do que em outras.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                dynamicHeight={true}
              >
                {skills.map((skill) => {
                  return (
                    <div className="item">
                      <img src={skill.imagem} alt={skill.title} />
                      <h5>{skill.title}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Imagem de fundo" />
    </section>
  );
};
