import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import Button from "react-bootstrap/Button";

function FanMessages() {
  const { t } = useTranslation();
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
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

  // 로그인 상태 확인
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
    setMessages([{ name: loginStatus.username, text }, ...messages]);
    setText("");
  };

  const handleLogout = () => {
    setLoginStatus(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
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
          <h3 style={{ marginBottom: "1rem" }}>팬 메시지</h3>
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

export default FanMessages;
