import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorShape2 from "../assets/img/em-breve.png"
import emBreve from "../assets/img/em-breve2.png"
import proj1 from "../assets/img/pet-list.png"
import proj2 from "../assets/img/dsmovie.png"
import TrackVisibility from 'react-on-screen'
import 'animate.css'

export const Projects = () => {

    const projects = [
        {
            title: "Pet List",
            description: "Adicionar, editar ou remover dados dos pets e seus donos.",
            imgUrl: proj1,
            linkPag: "https://alison-crudreact.netlify.app",
            linkRepo: "https://github.com/TinhoLima/crud-react/tree/main/frontend",
            about: 'React, HTML5, CSS3, Bootstrap, Javascript, JSON',
        },
        {
            title: "DSMovie",
            description: "Catálogo para avaliação de filmes",
            imgUrl: proj2,
            linkPag: "https://alison-dsmovie.netlify.app",
            linkRepo: "https://github.com/TinhoLima/dsmovie/tree/main",
            about: 'React, TypeScript, HTML5, CSS3, Bootstrap, Javascript, Java, Spring-boot',
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: emBreve,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                                    <p>Aqui estão os meus projetos que já foram concluídos, os que estão em processo de desenvolvimento, ou os que eu ainda estou planejando desenvolver, mas que muito em breve já estarão por aqui.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Mais projetos em breve! 🚀</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lorem ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorShape2} alt="img"></img> */}
        </section>
    )
}