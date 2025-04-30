import "./socials.scss";

import instagram from "@/assets/instagram.png";
import facebook from "@/assets/facebook.png";
import tiktok from "@/assets/tiktok.png";
import youtube from "@/assets/youtube.png";
import linkedin from "@/assets/linkedin.png";
import { Link } from "react-router-dom";

const Socials = () => {
  const socialsGroup = [
    {
      icons: [
        { img: facebook, url: "/" },
        { img: instagram, url: "" },
      ],
      text: "Facebook & Instagram",
    },
    {
      icons: [
        { img: tiktok, url: "" },
        { img: youtube, url: "" },
      ],
      text: "TikTok & Youtube",
    },
    {
      icons: [{ img: linkedin, url: "" }],
      text: "LinkedIn (pentru B2b)",
      linkedin: "",
    },
  ];

  return (
    <>
      <div className="title-2 socials-header">
        Platformele vizate de serviciul nostru SMM
      </div>
      <div className="smm-socials">
        {socialsGroup.map((item, index) => (
          <div key={index} className="socials-group">
            <div className="socials-icons">
              {item.icons.map((icon, index) => (
                <Link to={icon.url}>
                  <img
                    className="socials-icon"
                    src={icon.img}
                    key={index}
                    width={70}
                    height={70}
                  />
                </Link>
              ))}
            </div>
            <div className="socials-text body">{item.text}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Socials;
