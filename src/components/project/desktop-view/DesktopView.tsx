import "./desktop-view.scss";
import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/placeholder.png";

interface Props {
  project: Pick<ProjectData, "desktopImg">;
}

const DesktopView = ({ project }: Props) => {
  const img = project.desktopImg ? project.desktopImg : placeholder;
  return (
    <div className="desktop-view">
      <img src={img} alt="pixado" />
    </div>
  );
};

export default DesktopView;
