import "./desktop-view.scss";
import { ProjectData } from "@/pages/Project";

interface Props {
  project: Pick<ProjectData, "desktopImg">;
}

const DesktopView = ({ project }: Props) => {
  return (
    <div className="desktop-view">
      <img src={project.desktopImg} alt="pixado" />
    </div>
  );
};

export default DesktopView;
