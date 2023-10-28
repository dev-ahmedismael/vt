import React from "react";
import SectionWithCards from "@/templates/SectionWithCards";

const HomeOurServices = ({ dict, lang }) => {
  return (
    <SectionWithCards
      title={dict.home.our_services.title}
      description={dict.home.our_services.description}
      cards={dict.home.our_services.cards}
    />
  );
};

export default HomeOurServices;
