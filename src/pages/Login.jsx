import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !pin) {
      alert(
        t("login.error.missingFields", "사용자명과 PIN을 모두 입력해주세요!")
      );
      return;
    }

    const pinRegex = /^\d{7}$/;
    if (!pinRegex.test(pin)) {
      alert(t("login.error.invalidPin", "PIN은 7자리 숫자여야 합니다!"));
      return;
    }

    try {
      // 실제 API 호출 대신 로컬 스토리지 사용 (데모용)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.username === username && u.pin === pin);

      if (user) {
        setLoginStatus({ username });
        localStorage.setItem("currentUser", JSON.stringify({ username }));
        alert(t("login.success", "로그인 성공!"));
        navigate("/fan-messages");
      } else {
        alert(
          t("login.error.invalidCredentials", "잘못된 사용자명 또는 PIN입니다!")
        );
      }
    } catch (err) {
      console.error(err);
      alert(
        t(
          "login.error.general",
          "로그인 오류가 발생했습니다. 다시 시도해주세요."
        )
      );
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "500px" }}>
      <h1>{t("login.title", "로그인")}</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>{t("login.username", "사용자명")}</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t(
              "login.usernamePlaceholder",
              "사용자명을 입력하세요"
            )}
            autoComplete="username"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("login.pin", "PIN")}</Form.Label>
          <Form.Control
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder={t("login.pinPlaceholder", "7자리 PIN을 입력하세요")}
            autoComplete="current-password"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          {t("login.submit", "로그인")}
        </Button>
      </Form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          {t("login.noAccount", "계정이 없으신가요?")}{" "}
          <Button
            variant="link"
            onClick={() => navigate("/register")}
            style={{ padding: 0, margin: 0 }}
          >
            {t("login.register", "회원가입")}
          </Button>
        </p>
      </div>
    </div>
  );
}
