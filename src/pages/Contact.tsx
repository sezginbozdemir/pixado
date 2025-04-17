import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ContactIntro from "../components/contact/intro/ContactIntro";
import ContactForm from "../components/contact/form/ContactForm";
import Faq from "../components/contact/faq/Faq";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <ContactIntro />
      <ContactForm />
      <Faq />
    </Container>
  );
};

export default Contact;
