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
    <div className="page-container">
      <h1 className="page-title">{t("faq.title")}</h1>
      <div className="page-section">
        <ul>
          <li>
            <strong>{t("faq.q1")}</strong>
            <br />
            {t("faq.a1")}
          </li>
          <li>
            <strong>{t("faq.q2")}</strong>
            <br />
            {t("faq.a2")}
          </li>
          <li>
            <strong>{t("faq.q3")}</strong>
            <br />
            {t("faq.a3")}
          </li>
          <li>
            <strong>{t("faq.q4")}</strong>
            <br />
            {t("faq.a4")}
          </li>
          <li>
            <strong>{t("faq.q5")}</strong>
            <br />
            {t("faq.a5")}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
