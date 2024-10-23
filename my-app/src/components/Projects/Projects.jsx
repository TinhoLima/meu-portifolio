import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import emBreve from "../../assets/img/em-breve2.png"
import proj1 from "../../assets/img/pet-list.png"
import proj2 from "../../assets/img/dsmovie.png"
import TrackVisibility from 'react-on-screen'
import "./projects.css"
import 'animate.css'

export const Projects = () => {

    const projects = [
        {
            title: "Pet List",
            description: "Adicionar, editar ou remover dados dos pets e seus donos.",
            imgUrl: proj1,
            linkPag: "https://alison-crudreact.netlify.app",
            linkRepo: "https://github.com/TinhoLima/crud-react/tree/main/frontend",
            about: 'O site oferece uma interface com simples navegação para realizar cadastro e alteração de dados feito pelos usuários (CRUD System). Os dados são armazenados em um banco de dados JSON.',
            technology: 'React, HTML5, CSS3, Bootstrap, Javascript, JSON',
        },
        {
            title: "DSMovie",
            description: "Catálogo para avaliação de filmes",
            imgUrl: proj2,
            linkPag: "https://alison-dsmovie.netlify.app",
            linkRepo: "https://github.com/TinhoLima/dsmovie/tree/main",
            about: 'O projeto consiste em um sistema de avaliação de filmes e séries criando um ranking com pontuações de 1 a 5 onde mostra uma média de pontos conforme a avaliação dos usuários. (Tempo estimado para carregamento do backend é de 2 minutos. *estamos trabalhando para melhorar o load da página*)',
            technology: 'React, TypeScript, HTML5, CSS3, Bootstrap, Javascript, Java, Spring-boot',
        },
        {
            title: "",
            description: "",
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
                                    <Nav.Link eventKey="first">1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" disabled>3</Nav.Link>
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
        </section>
    )
}