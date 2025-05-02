import "./mobile-view.scss";
import { ProjectData } from "@/pages/Project";
import placeholder from "@/assets/logo.png";

interface Props {
  project: Pick<ProjectData, "mobileImg">;
}

const MobileView = ({ project }: Props) => {
  const img = project.mobileImg ? project.mobileImg : placeholder;
  return (
    <div className="mobile-view">
      <img src={img} alt="pixado" />
    </div>
  );
};

export default MobileView;
