import CreateNewContract from "@/components/user/create-new-contract/CreateNewContract";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <CreateNewContract dict={dict} lang={lang} />
    </main>
  );
}
