import VisitRequest from "@/components/user/visit-request/VisitRequest";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <VisitRequest dict={dict} lang={lang} />
    </main>
  );
}
