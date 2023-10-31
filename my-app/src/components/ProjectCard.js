import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, subdescription, imgUrl }) => {
    
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="description">{description}</span>
                    <br/>
                    <span className="subdescription">{subdescription}</span>
                    <br/>
                    <button className="link-proj">Projeto no ar</button>
                    <button className="link-proj">Repositorio</button>
                </div>
            </div>
        </Col>
    )
}