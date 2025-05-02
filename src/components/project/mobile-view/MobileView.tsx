import "./mobile-view.scss";
import { ProjectData } from "@/pages/Project";

interface Props {
  project: Pick<ProjectData, "mobileImg">;
}

const MobileView = ({ project }: Props) => {
  return (
    <div className="mobile-view">
      <img src={project.mobileImg} alt="pixado" />
    </div>
  );
};

export default MobileView;
