import { useTranslation } from "react-i18next";
import Countdown from "../components/Countdown";

function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("home.title")}</h1>
      <Countdown />
      <section>
        <h2>{t("home.summary")}</h2>
        <ul>
          <li>{t("home.date", "날짜: 2024년 9월 21일")}</li>
          <li>{t("home.place", "장소: 서울 올림픽홀")}</li>
          <li>{t("home.time", "시간: 오후 6시")}</li>
        </ul>
      </section>
      <section>
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
              {t("home.official", "공식사이트")}
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
