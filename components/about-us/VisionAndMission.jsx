import LtrSection from "@/templates/LtrSection";
import { Box } from "@mui/material";
import React from "react";

const VisionAndMission = ({ dict, lang }) => {
  const section = {
    title: dict.about_us.vision_and_mission.title,
    description: dict.about_us.vision_and_mission.description,
    imgUrl: "/images/about_eye.png",
    hasBtn: true,
    btnUrl: `/${lang}/contact-us`,
    btnContent: dict.about_us.vision_and_mission.button,
  };
  return (
    <LtrSection
      title={section.title}
      description={section.description}
      imgUrl={section.imgUrl}
      hasBtn={section.hasBtn}
      btnUrl={section.btnUrl}
      btnContent={section.btnContent}
    />
  );
};

export default VisionAndMission;
