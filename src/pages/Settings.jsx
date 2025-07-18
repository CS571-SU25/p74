import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Settings() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("settings.title")}</h1>
      <p>{t("settings.language")}</p>
      <LanguageSwitcher />
    </div>
  );
}

export default Settings;
