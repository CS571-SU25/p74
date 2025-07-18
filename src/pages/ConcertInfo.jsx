import { useTranslation } from "react-i18next";
import Map from "../components/Map";

function ConcertInfo() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("concert.title")}</h1>
      <ul>
        <li>{t("concert.date", "날짜: 2024년 9월 21일")}</li>
        <li>{t("concert.place", "장소: 서울 올림픽홀")}</li>
        <li>{t("concert.time", "시간: 오후 6시")}</li>
        <li>{t("concert.seat", "좌석: 전석 지정석")}</li>
        <li>
          {t("concert.ticket", "예매")}:{" "}
          <a
            href="https://ticketlink.co.kr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("concert.ticketlink", "티켓링크")}
          </a>
        </li>
      </ul>
      <h2>{t("concert.map", "공연장 위치")}</h2>
      <Map />
    </div>
  );
}

export default ConcertInfo;
