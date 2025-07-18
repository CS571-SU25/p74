import { useTranslation } from "react-i18next";
import { useState } from "react";

function FanMessages() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([
    {
      name: t("fanMessages.sample1.name", "묭이최고"),
      text: t("fanMessages.sample1.text", "아이묭 내한 너무 기대돼요!"),
    },
    {
      name: t("fanMessages.sample2.name", "Aimmu"),
      text: t("fanMessages.sample2.text", "いつも応援しています！"),
    },
  ]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;
    setMessages([{ name, text }, ...messages]);
    setName("");
    setText("");
  };

  return (
    <div>
      <h1>{t("fanMessages.title")}</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2em" }}>
        <input
          type="text"
          placeholder={t("fanMessages.name", "이름")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="text"
          placeholder={t("fanMessages.message", "메시지")}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ marginRight: 8, width: 200 }}
        />
        <button type="submit">{t("fanMessages.submit", "남기기")}</button>
      </form>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>
            <strong>{msg.name}:</strong> {msg.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FanMessages;
