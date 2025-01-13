import React from "react";
import "./projects-list.css"; // Assume the CSS above is saved here

interface ProjectCardProps {
  title: string;
  imgUrl: string;
  details: string;
  date: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgUrl,
  details,
  date,
}) => {
  return (
    <div className="project">
      <div className="project-card">
        <div className="project-image">
          <img
            src="/service-images/services-visual-1.png"
            alt="Project Background"
            className="background-img"
          />
        </div>
      </div>
      <div className="project-details">
        <div className="title-date-container">
          <span className="project-date">2025</span>
          <h3 className="project-title">Project name</h3>
        </div>
        <p className="project-description">details about project</p>
      </div>
    </div>
  );
};

export default ProjectCard;
