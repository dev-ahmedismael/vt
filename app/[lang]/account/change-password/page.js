import ChangePassword from "@/components/user/change-password/ChangePassword";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <ChangePassword dict={dict} lang={lang} />
    </main>
  );
}
