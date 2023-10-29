import ChangeEmail from "@/components/user/change-email/ChangeEmail";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <ChangeEmail dict={dict} lang={lang} />
    </main>
  );
}
