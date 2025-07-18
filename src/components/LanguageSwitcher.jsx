import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div>
      <button
        style={{
          marginRight: 4,
          fontWeight: lang === "ko" ? "bold" : "normal",
        }}
        onClick={() => i18n.changeLanguage("ko")}
      >
        한글
      </button>
      <button
        style={{ fontWeight: lang === "en" ? "bold" : "normal" }}
        onClick={() => i18n.changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
