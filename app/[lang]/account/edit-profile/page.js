import EditProfile from "@/components/user/edit-profile/EditProfile";
import { getDictionary } from "../../dictionaries";

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main>
      <EditProfile dict={dict} lang={lang} />
    </main>
  );
}
