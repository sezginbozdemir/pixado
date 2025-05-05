import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./projects-list.css";
import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

interface ProjectCardProps {
  id: number;
  title: string;
  imgUrl?: string;
  details: string;
  date: string;
  tags: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  imgUrl,
  details,
  date,
  tags,
}) => {
  const isTabletOrLarger = useMediaQuery({ minWidth: 769 });

  const [marginStyle, setMarginStyle] = useState<React.CSSProperties>({});
  const location = useLocation();

  const isPortfolioPath = location.pathname === "/portfoliu";
  useEffect(() => {
    if (isTabletOrLarger) {
      if (!tags[1]) {
        setMarginStyle({ right: "28%" });
      } else if (!tags[2]) {
        setMarginStyle({ right: "10%" });
      } else {
        setMarginStyle({});
      }
    } else {
      if (!tags[1]) {
        setMarginStyle({ right: "25%" });
      } else {
        setMarginStyle({});
      }
    }
  }, [isTabletOrLarger, tags]);
  return (
    <Container className="project">
      <Row className="project-card">
        <Row
          className={`details-regular ${
            isPortfolioPath ? `work-done-horizontal` : `work-done`
          }`}
          style={marginStyle}
        >
          {tags[0] && (
            <Col xs={3} md={2} className="work-done-options">
              {tags[0]}
            </Col>
          )}
          {tags[1] && (
            <Col xs={3} md={2} className="work-done-options">
              {tags[1]}
            </Col>
          )}
          {tags[2] && isTabletOrLarger && (
            <Col md={1} className="work-done-options">
              {tags[2]}
            </Col>
          )}
        </Row>

        <div className="project-image">
          <Link to={`/portfoliu/${id}`} className="project-card-link">
            <img
              src={imgUrl || "/project-images/wallpaper-1.png"}
              alt={title}
              className="background-img"
            />
          </Link>
        </div>
      </Row>
      <div className="project-details">
        <div className="title-date-container">
          <span className="body project-date">{date}</span>
          <div className="body project-title">{title}</div>
        </div>
        <p className="project-description title-3">{details}</p>
      </div>
    </Container>
  );
};

export default ProjectCard;
