import { Alert, Col, Row } from "react-bootstrap";
import { useState } from "react";

export const Newsletter = () => {
    const [email, setEmail] = useState('alison@email.com')
    const [copiado, setCopiado] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(email).then(() => {
            setCopiado(true);
        });

        setTimeout(() => {
            setCopiado(false)
        }, 2000);

    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col md={5} xl={5}>
                        <h3>Me envie seu e-mail para contato!</h3>
                        <div className="new-email-bx">
                            <input value={email} type="email" disabled={true} onChange={(e) => setEmail(e.target.value)} />
                            <button className="copy-bt" onClick={handleCopy}><span>Copy</span></button>
                        </div>
                        {copiado == true && <Alert variant="success">texto copiado</Alert>}
                    </Col>
                </Row>
            </div>
        </Col>
    )
}