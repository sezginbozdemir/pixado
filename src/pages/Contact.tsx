import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ContactIntro from "../components/contact/intro/ContactIntro";
import ContactForm from "../components/contact/form/ContactForm";
import Faq from "../components/contact/faq/Faq";
import PageMeta from "../components/common/PageMeta";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <PageMeta title="Contact" description="Contact Meta" />
      <ContactIntro onClick={scrollToForm} />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <Faq />
    </Container>
  );
};

export default Contact;
