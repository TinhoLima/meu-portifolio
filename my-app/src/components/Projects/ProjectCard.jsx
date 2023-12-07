import { Col } from "react-bootstrap";
import { ModalProject } from "./ProjectModal";

export const ProjectCard = ({ title, description, imgUrl, linkPag, linkRepo, about, technology }) => {
    const minhaFuncao = ModalProject(title, about, technology)

    return (
        <Col sm={12} md={12} lg={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="img" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="description">{description}</span>
                    <br />
                    <a href={linkPag} target="_blank"><button className="link-proj">Página</button></a>
                    <a href={linkRepo} target="_blank"><button className="link-proj">Repositório</button></a>
                    {minhaFuncao}
                </div>
            </div>
        </Col>
    )
}
