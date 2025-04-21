import React, { useEffect } from "react";
import PageMeta from "../components/common/PageMeta";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageMeta title="Servicii" description="Servicii Meta" />
    </>
  );
};

export default Services;
