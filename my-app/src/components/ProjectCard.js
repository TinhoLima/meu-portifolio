import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, subdescription, imgUrl, linkPag, linkRepo }) => {
    
    return (
        <Col sm={12} md={12} lg={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="description">{description}</span>
                    <br/>
                    <span className="subdescription">{subdescription}</span>
                    <br/>
                    <a href={linkPag} target="_blank"><button className="link-proj">Página</button></a>
                    <a href={linkRepo} target="_blank"><button className="link-proj">Repositório</button></a>
                    <a href=""><button className="link-proj">Descrição</button></a>
                </div>
            </div>
        </Col>
    )
}