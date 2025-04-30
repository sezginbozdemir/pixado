import "./branding-services.scss";
import Button from "@/components/common/buttons/Button";
import decorOne from "@/assets/line-group-2.png";
import decorTwo from "@/assets/line-group-multi.png";
import { Link } from "react-router-dom";
import Spacing from "@/components/common/Spacing";

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
    <>
      <Spacing size={3} />
      <div className="branding-flex">
        <img
          src={decorOne}
          width={110}
          height={40}
          className="decor-one-sub-services"
          alt="pixado"
        />
        <img
          width={440}
          height={70}
          src={decorTwo}
          className="decor-two-sub-services"
          alt="pixado"
        />
        <img
          width={240}
          height={50}
          src={decorTwo}
          className="decor-three-sub-services"
          alt="pixado"
        />
        <img
          width={140}
          height={50}
          src={decorOne}
          className="decor-four-sub-services"
          alt="pixado"
        />
        <img
          width={240}
          height={50}
          src={decorTwo}
          className="decor-five-sub-services"
          alt="pixado"
        />
        <img
          width={170}
          height={70}
          src={decorOne}
          className="decor-six-sub-services"
          alt="pixado"
        />
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
      <Spacing size={3} />
    </>
  );
};
export default BrandingServices;
