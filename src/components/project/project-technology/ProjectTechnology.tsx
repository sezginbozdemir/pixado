import { ProjectData } from "@/pages/Project";
import "./technology.scss";

interface Props {
  project: Pick<ProjectData, "technology">;
}

const ProjectTechnology = ({ project }: Props) => {
  return (
    <div className="project-tech">
      <div className="tech-col-1">
        <div className="title-2">{project.technology.title}</div>
        <div className="tech-icons">
          {project.technology.icons.map((item, index) => (
            <div key={index} className="tech-icon-container">
              <img src={item.icon} />
              <span className="body">{item.title}</span>
            </div>
          ))}
        </div>
        <div className="body">{project.technology.textTwo}</div>
      </div>
      <div className="tech-col-2">
        <div
          className="body"
          dangerouslySetInnerHTML={{ __html: project.technology.textOne }}
        />
        <div className="tech-list">
          <div className="title-3">{project.technology.list.title}</div>
          <ul>
            {project.technology.list.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProjectTechnology;
