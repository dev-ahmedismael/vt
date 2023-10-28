import OurServices from "@/components/our-services/OurServices";
import ServicesHeader from "@/components/our-services/ServicesHeader";
import React from "react";
import { getDictionary } from "../dictionaries";

const page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);

  return (
    <main>
      <ServicesHeader dict={dict} lang={lang} />
      <OurServices dict={dict} lang={lang} />
    </main>
  );
};

export default page;
