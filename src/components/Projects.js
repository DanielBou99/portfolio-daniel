import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Esses são alguns projetos que eu atuei profissionalmente e escolhi
              compartilhar, todos contribuíram muito para o meu aprendizado.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">NAVA Technology</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Banco do Brasil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tokio Marine</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p className="project-description">
                    Na Nava tenho a oportunidade de trabalhar em dois projetos
                    de grandes clientes da área de Telecomunicação. <br />
                    No projeto utilizamos Java+Spring Boot no Back e
                    Angular+PrimeNG no Front. <br />
                    Usamos o Keycloak para autenticação, tanto para os usuários
                    realizarem login quanto para o front realizar requisições
                    para o back. <br />
                    Também fizemos uso do GitLab Container Registry e Docker.{" "}
                    <br />
                    Todo o projeto será publicado na AWS visando ter alta
                    disponibilidade.
                    <br />
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p className="project-description">
                    No Banco do Brasil atuei na Arquitetura 3.0 (Cloud) criando
                    um serviço para integrar com um grande parceiro do Banco e
                    disponibilizar o novo produto para os seus clientes. <br />
                    No projeto usamos Java+Quarkus no back e Angular+PrimeNG
                    para o front. <br />
                    Em paralelo usamos diversas ferramentas como Git, Docker,
                    Kubernetes (ArgoCD e Rancher), SonarQube, Jenkins, Grafana,
                    Jaeger, Prometheus, entre outros.
                    <br />
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p className="project-description">
                    Na Tokio Marine atuei tanto na criação de novos projetos
                    como na sustentação dos já existentes utilizando:
                    <br />
                    Java, Spring, Spring Cloud (Eureka Server, Zull, Feign, e
                    Ribbon), Grafana, Jenkins, Git, Angular, Angular Materials,
                    RabbitMQ, entre outros.
                    <br />
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
