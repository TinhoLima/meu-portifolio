import { Container, Col, Row } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import foto from '../assets/img/perfil5.jpg'
import colorSharp2 from '../assets/img/color-sharp2.png'

export const About = () => {
    return (
        <section className="abouted" id="about">
            <Container>
                <Row className="about-bx">
                    <h2> Sobre mim </h2>
                    <Col xs={12} md={4} xl={3} className="about-img">
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                                    <img src={foto} alt="about Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={8} xl={9}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                                    <p>Eu sou Alison Coutinho, <span>Desenvolvedor front-end em formação nas tecnologias HTML, CSS, Javascript e React, além de possuir experiência com back-end na tecnologia Node.js</span>. Tenho 27 anos e a cada experiência me tornando um entusiasta em programação, estou buscando estudar e desenvolver projetos cada vez mais sofisticados que possam levar minhas habilidades há novos horizontes! Claro que juntos fazemos muito mais, por isso quero vivenciar trabalhos em equipe, receber feedbaks e melhorar com eles para que eu possa alcançar minha meta de ser um excelente profissional referência nessa área.</p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="img-bg" />
        </section>
    )
}