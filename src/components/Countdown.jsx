import { useEffect, useState } from "react";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <span>공연이 시작되었습니다!</span>;

  return (
    <div style={{ margin: "1em 0" }}>
      <strong>공연까지 남은 시간:</strong> {timeLeft.days}일 {timeLeft.hours}
      시간 {timeLeft.minutes}분 {timeLeft.seconds}초
    </div>
  );
}

export default Countdown;
