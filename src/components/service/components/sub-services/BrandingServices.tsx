import "./branding-services.scss";
import Button from "@/components/common/buttons/Button";
import { Link } from "react-router-dom";

interface Props {
  services: {
    title: string;
    text: string;
    button: string;
  }[];
}
const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const BrandingServices = ({ services }: Props) => {
  return (
    <div className="branding-flex">
      {services.map((service, index) => {
        const path = `${slugify(service.title)}`;
        return (
          <div key={index} className="branding-services-container">
            <div className="title-2 branding-title">{service.title}</div>
            <div className="branding-details">
              <div className="body">{service.text}</div>
              <Link to={path}>
                <Button className="branding-button" text={service.button} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default BrandingServices;
