import { useTranslation } from "react-i18next";
import Countdown from "../components/Countdown";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="page-container">
      <h1 className="page-title">{t("home.title")}</h1>
      <div className="page-section">
        <Countdown />
      </div>
      <div className="page-section">
        <h2>{t("home.summary")}</h2>
        <ul>
          <li>{t("home.date")}</li>
          <li>{t("home.place")}</li>
          <li>{t("home.time")}</li>
        </ul>
      </div>
      <div className="page-section">
        <h2>{t("home.sns")}</h2>
        <ul>
          <li>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://officialsite.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("home.official")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
