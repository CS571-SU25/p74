import { useTranslation } from "react-i18next";

function Discography() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("discography.title")}</h1>
      <ul>
        <li>{t("discography.song1", "마리골드 (2018)")}</li>
        <li>{t("discography.song2", "사랑을 전하고 싶다 (2017)")}</li>
        <li>{t("discography.song3", "하로하로 (2019)")}</li>
      </ul>
      <h2>{t("discography.mv", "뮤직비디오")}</h2>
      <ul>
        <li>
          <a
            href="https://www.youtube.com/watch?v=0xSiBpUdW4E"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("discography.mv1", "마리골드 MV")}
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=Q6omsDyFNlk"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("discography.mv2", "사랑을 전하고 싶다 MV")}
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Discography;
