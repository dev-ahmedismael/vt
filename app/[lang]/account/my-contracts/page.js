import MyContracts from "@/components/user/my-contracts/MyContracts";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <MyContracts dict={dict} lang={lang} />
    </main>
  );
}
