import CenteredSection from "@/templates/CenteredSection";
import React from "react";

const AboutCompany = ({ dict, lang }) => {
  const section = {
    title: "",
    description: dict.about_us.description,
  };
  return <CenteredSection description={section.description} />;
};

export default AboutCompany;
