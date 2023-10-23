import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {
    const [emailText, setEmailText] = useState('alisonrj.work@gmail.com');
    const [background, setBackground] = useState('transparent')
    const email = 'alisonrj.work@gmail.com'

    const handleMouseOver = () => {
        if (emailText !== 'Copiado!') {
            setEmailText('Click para copiar!')
            setBackground('#121212c9')
        }
    }

    const handleMouseLeave = () => {
        if (emailText === 'Copiado!') {
            setTimeout(() => {
                setEmailText('alisonrj.work@gmail.com')
                setBackground()
            }, 2000);
        } else {
            setEmailText('alisonrj.work@gmail.com')
            setBackground()
        }
    }

    const handleMouseUp = () => {
        navigator.clipboard.writeText(email).then(() => {
            setEmailText('Copiado!')
            setBackground('#121212c9')
        })
    }

    return (
        <section className="contact" id="contact-me">
            <Container>
                <Row className="align-items-center p-2">
                    <Col md={6}>
                        <img className="img-contact" src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6} >
                        <Row>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounceInRight" : "animate__animated animate__fadeOutRight"}>
                                        <h1>Me envie um e-mail para contato!</h1>
                                    </div>}
                            </TrackVisibility>
                            <Col className="col-button">
                                <button type="button" style={{ backgroundColor: background }} onMouseUp={handleMouseUp} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>{emailText}</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}