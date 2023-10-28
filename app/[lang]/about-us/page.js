import AboutCompany from "@/components/about-us/AboutCompany";
import AboutUsHeader from "@/components/about-us/AboutUsHeader";
import OurTeam from "@/components/about-us/OurTeam";
import Values from "@/components/about-us/Values";
import VisionAndMission from "@/components/about-us/VisionAndMission";
import React from "react";
import { getDictionary } from "../dictionaries";

const page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main>
      <AboutUsHeader dict={dict} lang={lang} />
      <AboutCompany dict={dict} lang={lang} />
      <VisionAndMission dict={dict} lang={lang} />
      <Values dict={dict} lang={lang} />
    </main>
  );
};

export default page;
