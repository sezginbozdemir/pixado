import Button from "@/components/common/buttons/Button";
import "./smm-services.scss";

import placeholder from "@/assets/placeholder.png";
import { Link } from "react-router-dom";

interface Props {
  services: {
    img: string;
    title: string;
    text: string;
    button: string;
    tag: string;
    url: string;
  }[];
}

const SmmServices = ({ services }: Props) => {
  return (
    <div className="smm-services">
      {services.map((service, index) => (
        <div key={index} className="smm-service">
          <div
            className={`smm-service-float-wrapper ${
              index % 2 !== 0 ? "smm-service-order" : ""
            }`}
          >
            <div
              className={`title-4  smm-tag ${
                index % 2 !== 0 ? "mirrored-header" : "smm-header"
              }`}
            >
              {service.tag}
            </div>
            <div
              className={`smm-service-img-wrapper ${
                index % 2 !== 0 ? "mirrored" : ""
              }`}
            >
              <img
                className="smm-service-img"
                src={service.img ? service.img : placeholder}
              />
            </div>
          </div>
          <div className="smm-service-details">
            <div className="title-2">{service.title}</div>
            <div className="body">{service.text}</div>
            <Link to={`/servicii/online-marketing/${service.url}`}>
              <Button className="smm-button" text={service.button} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmmServices;
