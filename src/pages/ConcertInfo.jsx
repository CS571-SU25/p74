import { useTranslation } from "react-i18next";
import Map from "../components/Map";

function ConcertInfo() {
  const { t } = useTranslation();
  return (
    <div className="page-container">
      <h1 className="page-title">{t("concert.title")}</h1>
      <div className="page-section">
        <ul>
          <li>{t("concert.date")}</li>
          <li>{t("concert.place")}</li>
          <li>{t("concert.time")}</li>
          <li>{t("concert.seat")}</li>
          <li>
            {t("concert.ticket")}:{" "}
            <a
              href="https://ticket.yes24.com/Perf/53044/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("concert.ticketlink")}
            </a>
          </li>
        </ul>
      </div>
      <div className="page-section">
        <h2>{t("concert.map")}</h2>
        <Map />
      </div>
    </div>
  );
}

export default ConcertInfo;
