import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !pin || !confirmPin) {
      alert(
        t("register.error.missingFields", "사용자명과 PIN을 모두 입력해주세요!")
      );
      return;
    }

    const pinRegex = /^\d{7}$/;
    if (!pinRegex.test(pin) || !pinRegex.test(confirmPin)) {
      alert(t("register.error.invalidPin", "PIN은 7자리 숫자여야 합니다!"));
      return;
    }

    if (pin !== confirmPin) {
      alert(t("register.error.pinMismatch", "PIN이 일치하지 않습니다!"));
      return;
    }

    try {
      // 실제 API 호출 대신 로컬 스토리지 사용 (데모용)
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // 사용자명 중복 확인
      if (users.some((user) => user.username === username)) {
        alert(
          t("register.error.usernameTaken", "이미 사용 중인 사용자명입니다!")
        );
        return;
      }

      // 새 사용자 추가
      const newUser = { username, pin };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // 자동 로그인
      setLoginStatus({ username });
      localStorage.setItem("currentUser", JSON.stringify({ username }));

      alert(t("register.success", "회원가입 성공!"));
      navigate("/fan-messages");
    } catch (err) {
      console.error(err);
      alert(
        t(
          "register.error.general",
          "회원가입 오류가 발생했습니다. 다시 시도해주세요."
        )
      );
    }
  };

  return (
    <div className="page-container" style={{ maxWidth: "500px" }}>
      <h1>{t("register.title", "회원가입")}</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3">
          <Form.Label>{t("register.username", "사용자명")}</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={t(
              "register.usernamePlaceholder",
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
          <Form.Label>{t("register.pin", "PIN")}</Form.Label>
          <Form.Control
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder={t("register.pinPlaceholder", "7자리 PIN을 입력하세요")}
            autoComplete="new-password"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{t("register.confirmPin", "PIN 확인")}</Form.Label>
          <Form.Control
            type="password"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            placeholder={t(
              "register.confirmPinPlaceholder",
              "PIN을 다시 입력하세요"
            )}
            autoComplete="new-password"
            style={{
              backgroundColor: "var(--input-bg)",
              borderColor: "var(--input-border)",
              color: "var(--text-primary)",
            }}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">
          {t("register.submit", "회원가입")}
        </Button>
      </Form>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          {t("register.haveAccount", "이미 계정이 있으신가요?")}{" "}
          <Button
            variant="link"
            onClick={() => navigate("/login")}
            style={{ padding: 0, margin: 0 }}
          >
            {t("register.login", "로그인")}
          </Button>
        </p>
      </div>
    </div>
  );
}
