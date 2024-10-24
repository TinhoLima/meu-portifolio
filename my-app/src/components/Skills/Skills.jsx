import { Container, Col, Row } from "react-bootstrap";
import TrackVisibility from 'react-on-screen'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../../assets/img/meter1.svg"
import meter2 from "../../assets/img/meter2.svg"
import meter3 from "../../assets/img/meter3.svg"
import colorSharp from "../../assets/img/color-sharp.png"
import "./skills.css"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" >
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx" id="skills">
                            <h2> Skills </h2>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : "animate__animated animate__fadeOut"}>
                                        <p> Estas são as minhas habilidades e conhecimentos para projetar, desenvolver e depurar softwares. São elas: linguagens e frameworks que consigo trabalhar e desenvolver projetos ou tecnologias que estou estudando para aprimorar meu desenvolvimento e meus projetos. </p>
                                    </div>}
                            </TrackVisibility>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="img" draggable={false} />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="img" draggable={false}/>
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="img" draggable={false}/>
                                    <h5>Next.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="img" draggable={false}/>
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="img" draggable={false}/>
                                    <h5>bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="img" draggable={false}/>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="img" draggable={false}/>
                                    <h5>HTML5</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="img" draggable={false}/>
                                    <h5>CSS3</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="img" />
        </section>
    )
}