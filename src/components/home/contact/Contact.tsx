import React from "react";
import "./contact.css";
import Title from "../../common/Title";
import Text from "../../common/Text";
import Button from "../../common/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="first-container">
        <div className="first-col-contact">
          <div className="who">
            <Text variant="body">Cine suntem noi</Text>
          </div>
          <div className="partner">
            <Title variant="h2">
              PARTENERUL TĂU ÎN <br /> DEZVOLTARE DIGITALĂ
            </Title>
          </div>
        </div>
        <div className="second-col-contact">
          <div className="contact-text">
            <Text variant="body">
              Lorem ipsum dolor sit amet consectetur. Vel ut aliquet feugiat
              consectetur felis nunc nunc amet vitae. Mi sit aliquet mauris
              graseda ut. Lorem ipsum dolor sit amet consectetur. Vel ut aliquet
              feugiat consectetur felis nunc nunc amet vitae. Mi sit aliquet
              mauris graseda ut.
            </Text>
          </div>
          <div className="links-container">
            <Button className="contact-button" text="Contacteaza-ne"></Button>
            <Text variant="body">Află mai multe</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
