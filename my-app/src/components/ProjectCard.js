import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, subdescription, imgUrl }) => {
    
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
                    <button className="link-proj">Página</button>
                    <button className="link-proj">Repositório</button>
                </div>
            </div>
        </Col>
    )
}