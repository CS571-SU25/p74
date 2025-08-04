import { useTranslation } from "react-i18next";
import profile from "../assets/profile.png";

function About() {
  const { t } = useTranslation();

  return (
    <div className="page-container">
      <h1 className="page-title">{t("about.title")}</h1>
      <div className="page-section">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: 200, height: 200, margin: "0 auto 1em" }}>
            <img
              src={profile}
              alt="Aimyong"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                background: "var(--bg-secondary)",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>

        <div>
          <p
            style={{
              marginBottom: "1rem",
              lineHeight: "1.6",
              whiteSpace: "pre-line",
            }}
          >
            {t("about.desc")}
          </p>
          <p
            style={{
              marginBottom: "1rem",
              lineHeight: "1.6",
              whiteSpace: "pre-line",
            }}
          >
            {t("about.songs")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
