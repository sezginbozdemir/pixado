import React from "react";
import "./projects-list.css";
import Title from "../../common/Title";
import Text from "../../common/Text";

interface ProjectCardProps {
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  className?: string;
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
            src={imgUrl || "/project-images/project-card.png"}
            alt={title}
            className="background-img"
          />
        </div>
      </div>
      <div className="project-details">
        <div className="title-date-container">
          <span className="project-date">
            <Text variant="body">{date}</Text>
          </span>
          <div className="project-title">
            <Text variant="body">{title}</Text>
          </div>
        </div>
        <p className="project-description">
          <Title variant="h3">{details}</Title>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
