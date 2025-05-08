import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/logo.png";
import "./responsive.scss";

interface Props {
  project: Pick<ProjectData, "responsive">;
}

const ProjectResponsive = ({ project }: Props) => {
  const img = project.responsive.img || placeholder;
  return (
    <div className="project-responsive">
      <div className="responsive-row-1">
        <div className="flexi-design">
          <div className="title-2">{project.responsive.title}</div>
          <p className="body">{project.responsive.textTwo}</p>
        </div>
        <p className="body">{project.responsive.textOne}</p>
      </div>
      <div className="responsive-row-2">
        <img src={img} />
      </div>
    </div>
  );
};
export default ProjectResponsive;
