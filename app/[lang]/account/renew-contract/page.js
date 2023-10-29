import RenewContract from "@/components/user/renew-contract/RenewContract";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <RenewContract dict={dict} lang={lang} />
    </main>
  );
}
