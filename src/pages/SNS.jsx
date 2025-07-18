import { useTranslation } from "react-i18next";

function SNS() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("sns.title")}</h1>
      <div className="sns">
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
              {t("home.official", "공식사이트")}
            </a>
          </li>
        </ul>
      </div> 
    </div>
  );
}

export default SNS;
