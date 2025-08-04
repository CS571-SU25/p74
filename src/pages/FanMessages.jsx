// src/pages/FanMessages.jsx

import { useTranslation } from "react-i18next";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import Button from "react-bootstrap/Button";

// 로컬 스토리지 훅 (이전 코드에서 그대로 복사)
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

  // 메시지 목록은 항상 localStorage 에서 불러오기
  const [messages, setMessages] = useStorage("fan-messages", [
    { name: "AimmuFan", text: "Can't wait for AIMYONG's concert in Korea!" },
    { name: "MusicLover", text: "Always supporting AIMYONG!" },
  ]);
  const [text, setText] = useState("");

  // 로그인 정보 복원
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setLoginStatus({ username: user.username });
    }
  }, [setLoginStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !loginStatus) return;
    setMessages([{ name: loginStatus.username, text }, ...messages]);
    setText("");
  };

  const handleLogout = () => {
    setLoginStatus(null);
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="page-container">
      <h1 className="page-title">{t("fanMessages.title")}</h1>

      {/* 로그인 상태 표시 */}
      {loginStatus && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
          <span>
            {t("fanMessages.welcome")}, <strong>{loginStatus.username}</strong>!
          </span>
          <Button variant="outline-secondary" size="sm" onClick={handleLogout}>
            {t("fanMessages.logout")}
          </Button>
        </div>
      )}

      {/* 글 작성 폼 (로그인했을 때) / 로그인 안내 (안 했을 때) */}
      {loginStatus ? (
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
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
      ) : (
        <p style={{ marginBottom: "2rem", color: "var(--text-secondary)" }}>
          {t("fanMessages.loginRequiredMessage")}{" "}
          <Link to="/login">{t("fanMessages.login")}</Link>
        </p>
      )}

      {/* 메시지 리스트는 언제나 보여 주기 */}
      <div>
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
              <strong style={{ color: "var(--text-primary)" }}>{msg.name}:</strong>{" "}
              {msg.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
