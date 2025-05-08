import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";
import "./appointments.scss";
import { Container } from "react-bootstrap";
import decor from "@/assets/line-group-multi.png";

interface Props {
  project: Pick<ProjectData, "appointments">;
}

const ProjectAppointments = ({ project }: Props) => {
  const img = project.appointments.img || placeholder;
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <img src={decor} className="appointments-decor" />
      <Container>
        <div className="project-appointments">
          <div className="appointments-row-1">
            <span className="title-2">{project.appointments.title}</span>
            <p className="body">{project.appointments.textOne}</p>
          </div>
          <div className="appointments-row-2">
            <div className="appointments-img-container">
              <h3 className="title-4 appointments-tag contact-head">
                {project.appointments.tag}
              </h3>

              <div>
                <img src={img} />
              </div>
            </div>
            <span className="body">{project.appointments.textTwo}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ProjectAppointments;
