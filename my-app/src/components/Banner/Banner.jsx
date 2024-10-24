import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons"
import { TypeAnimation } from "react-type-animation"
import headerImg1 from "../../assets/img/header-img10.svg"
import pdf from "../../assets/document/alison-coutinho-cv.pdf"
import "./banner.css"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={10} xl={7}>
                        <span className="tagline">Bem-vindos ao meu Portifolio!</span>
                        <h1>Olá, meu nome é Alison!</h1>
                        <TypeAnimation
                            sequence={[
                                'E sou um Web Developer',
                                2000,
                                'E sou um Front-end Developer',
                                2000,
                                'E sou um Back-end Developer',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="wrap"
                            repeat={Infinity}
                        />
                        <p>Sejam muito bem-vindos! Meu nome é Alison Coutinho e sou apaixonado por desenvolvimento e por toda a área de tecnologia. Nesta página você vai encontrar meus projetos pessoais, minhas skills e minhas informações de contato.</p>
                        <a href={pdf} download="alison-coutinho-cv"><button className="banner-cv">Download CV<ArrowRightCircle size={20}/></button></a>
                    </Col>
                    <Col xs={12} md={2} xl={5}>
                        <img src={headerImg1} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}