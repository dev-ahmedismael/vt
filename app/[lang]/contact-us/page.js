import ContactUs from "@/components/contact-us/ContactUs";
import React from "react";
import { getDictionary } from "../dictionaries";

const page = async ({ params: { lang } }) => {
  const dict = await getDictionary(lang);
  return (
    <main>
      <ContactUs dict={dict} lang={lang} />
    </main>
  );
};

export default page;
