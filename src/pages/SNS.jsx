import { useTranslation } from "react-i18next";

function SNS() {
  const { t } = useTranslation();
  return (
    <div className="page-container">
      <h1 className="page-title">{t("sns.title")}</h1>
      <div className="page-section">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/aimyon_staff/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCQVhrypJhw1HxuRV4gX6hoQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.aimyong.net/"
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

export default SNS;
