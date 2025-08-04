import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import Button from "react-bootstrap/Button";

// TextAppManager.jsx 의 useStorage 훅을 그대로 복사해 옵니다
function useStorage(key, initialVal) {
  const [value, setValue] = useState(() => {
    try {
      const json = localStorage.getItem(key);
      return json != null ? JSON.parse(json) : initialVal;
    } catch {
      return initialVal;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function FanMessages() {
  const { t } = useTranslation();
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const navigate = useNavigate();

  // 기존 useState 대신 useStorage 로 교체합니다
  const [messages, setMessages] = useStorage("fan-messages", [
    {
      name: "AimmuFan",
      text: "Can't wait for AIMYONG's concert in Korea!",
    },
    {
      name: "MusicLover",
      text: "Always supporting AIMYONG!",
    },
  ]);
  const [text, setText] = useState("");

  // 로그인 상태 확인 (기존 로직 유지)
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setLoginStatus({ username: user.username });
    }
  }, [setLoginStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    // setMessages 를 통해 localStorage 에도 자동 저장됩니다
    setMessages([{ name: loginStatus.username, text }, ...messages]);
    setText("");
  };

  const handleLogout = () => {
    setLoginStatus(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!loginStatus) {
    return (
      <div className="page-container">
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h2>{t("fanMessages.loginRequired")}</h2>
          <p>{t("fanMessages.loginRequiredMessage")}</p>
          <Button
            variant="primary"
            onClick={() => navigate("/login")}
            style={{ marginRight: "10px" }}
          >
            {t("fanMessages.login")}
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => navigate("/register")}
          >
            {t("fanMessages.register")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="page-title">{t("fanMessages.title")}</h1>
      <div className="page-section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "1.1rem" }}>
            {t("fanMessages.welcome")}, <strong>{loginStatus.username}</strong>
            님!
          </span>
          <Button variant="outline-secondary" size="sm" onClick={handleLogout}>
            {t("fanMessages.logout")}
          </Button>
        </div>

        <form onSubmit={handleSubmit} style={{ marginBottom: "2em" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input
              type="text"
              placeholder={t("fanMessages.message")}
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "4px",
                border: "1px solid var(--input-border)",
                backgroundColor: "var(--input-bg)",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "12px 24px",
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {t("fanMessages.submit")}
            </button>
          </div>
        </form>

        <div>
          <h3 style={{ marginBottom: "1rem" }}>{t("fanMessages.title")}</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {messages.map((msg, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "12px",
                  padding: "16px",
                  backgroundColor: "var(--bg-secondary)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <strong style={{ color: "var(--text-primary)" }}>
                  {msg.name}:
                </strong>{" "}
                {msg.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
