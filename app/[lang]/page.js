import { getDictionary } from "./dictionaries";
import AboutStatistics from "@/components/home/AboutStatistics";
import HomeAboutUs from "@/components/home/HomeAboutUs";
import HomeCameraContract from "@/components/home/HomeCameraContract";
import HomeHeader from "@/components/home/HomeHeader";
import HomeOurServices from "@/components/home/HomeOurServices";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <HomeHeader dict={dict} lang={lang} />
      <AboutStatistics dict={dict} lang={lang} />
      <HomeAboutUs dict={dict} lang={lang} />
      <HomeOurServices dict={dict} lang={lang} />
      <HomeCameraContract dict={dict} lang={lang} />
      <HomeWhyChooseUs dict={dict} lang={lang} />
    </main>
  );
}
