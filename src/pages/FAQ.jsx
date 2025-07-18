import { useTranslation } from "react-i18next";
import { useState } from "react";

function FAQ() {
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question) return;
    setSubmitted(true);
    setQuestion("");
  };

  return (
    <div>
      <h1>{t("faq.title")}</h1>
      <ul>
        <li>
          <strong>{t("faq.q1", "Q. 티켓은 어디서 예매하나요?")}</strong>
          <br />
          {t("faq.a1", "A. 티켓링크에서 예매 가능합니다.")}
        </li>
        <li>
          <strong>{t("faq.q2", "Q. 공연장 주차는 가능한가요?")}</strong>
          <br />
          {t("faq.a2", "A. 올림픽홀 주차장 이용이 가능합니다.")}
        </li>
      </ul>
      <h2>{t("faq.contact", "문의하기")}</h2>
      {submitted ? (
        <div style={{ color: "green" }}>
          {t("faq.submitted", "문의가 접수되었습니다!")}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t("faq.input", "문의 내용을 입력하세요")}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            style={{ width: 300, marginRight: 8 }}
          />
          <button type="submit">{t("faq.submit", "문의하기")}</button>
        </form>
      )}
    </div>
  );
}

export default FAQ;
