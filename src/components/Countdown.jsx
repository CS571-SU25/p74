import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const concertDate = new Date("2025-09-21T18:00:00+09:00");

function getTimeLeft() {
  const now = new Date();
  const diff = concertDate - now;
  if (diff <= 0) return null;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <span>{t("countdown.concertStarted")}</span>;

  return (
    <div style={{ margin: "1em 0" }}>
      <strong>{t("countdown.leftTime")}:</strong> {timeLeft.days} {t("countdown.days")} {timeLeft.hours}
      {t("countdown.hours")} {timeLeft.minutes} {t("countdown.minutes")} {timeLeft.seconds} {t("countdown.seconds")}
    </div>
  );
}

export default Countdown;
