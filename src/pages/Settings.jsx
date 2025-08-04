import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Button from "react-bootstrap/Button";

function Settings() {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>{t("settings.title")}</h1>

      <div style={{ marginBottom: "2rem" }}>
        <h3>{t("settings.language")}</h3>
        <LanguageSwitcher />
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h3>{t("settings.theme", "테마 설정")}</h3>
        <p>
          {t(
            "settings.themeDesc",
            "다크 모드와 라이트 모드를 선택할 수 있습니다."
          )}
        </p>
        <Button
          variant={isDarkMode ? "light" : "dark"}
          onClick={toggleTheme}
          style={{ marginTop: "10px" }}
        >
          {isDarkMode
            ? t("settings.lightMode", "라이트 모드")
            : t("settings.darkMode", "다크 모드")}
        </Button>
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "8px",
          border: "1px solid var(--border-color)",
        }}
      >
        <h4>{t("settings.preview", "미리보기")}</h4>
        <p>
          {t("settings.previewDesc", "현재 선택된 테마가 적용된 모습입니다.")}
        </p>
        <div
          style={{
            padding: "1rem",
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
            borderRadius: "4px",
            marginTop: "10px",
          }}
        >
          <p style={{ color: "var(--text-primary)" }}>
            {t(
              "settings.sampleText",
              "이것은 샘플 텍스트입니다. 테마에 따라 색상이 변경됩니다."
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
