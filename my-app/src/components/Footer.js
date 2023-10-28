import { Container, Col, Row } from "react-bootstrap"
import logo from "../assets/img/logo2.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon5.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-bx">
                <Row className="">
                    <Col sm={9} >
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={3} className="icon">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/alison-coutinho-820328234/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="img"/></a>
                            <a href="https://www.facebook.com/alisson.coutinho.33/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="img"/></a>
                            <a href="https://github.com/TinhoLima" target="_blank" rel="noreferrer"><img src={navIcon3} alt="img"/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}