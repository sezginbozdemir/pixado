import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import ContactIntro from "@/components/contact/intro/ContactIntro";
import ContactForm from "@/components/contact/form/ContactForm";
import Faq from "@/components/contact/faq/Faq";
import PageMeta from "@/components/common/PageMeta";
import data from "@/data/contact/faq.json";
import Spacing from "@/components/common/Spacing";

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
      <Spacing size={5} />
      <ContactIntro onClick={scrollToForm} />
      <Spacing size={4} />
      <div ref={formRef}>
        <ContactForm />
      </div>
      <Spacing size={2} />

      <Faq data={data} />
    </Container>
  );
};

export default Contact;
