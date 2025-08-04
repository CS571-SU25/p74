import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginStatusContext } from "../contexts/LoginStatusContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import "./Header.css";
import logo from "../assets/Main_logo.png";

function Header() {
  const [loginStatus, setLoginStatus] = useContext(LoginStatusContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setCurrentUser(user);
      setLoginStatus({ username: user.username });
    }
  }, [setLoginStatus]);

  const handleLogout = () => {
    setLoginStatus(null);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      style={{
        padding: "1em 0",
        borderBottom: "1px solid var(--border-color)",
        marginBottom: "1em",
        backgroundColor: "var(--header-bg)",
        boxShadow: "var(--header-shadow)",
        position: "relative",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "2em",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="AIMYONG KOREA LIVE"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("about.title")}
            </Link>
            <Link
              to="/concert"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("concert.title")}
            </Link>
            <Link
              to="/discography"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("discography.title")}
            </Link>
            <Link
              to="/fan-messages"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("fanMessages.title")}
            </Link>
            <Link
              to="/faq"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("faq.title")}
            </Link>
            <Link
              to="/settings"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("settings.title")}
            </Link>
            <Link
              to="/sns"
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontWeight: "500",
                padding: "0.5em 0",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.target.style.borderBottomColor = "var(--link-color)")
              }
              onMouseLeave={(e) =>
                (e.target.style.borderBottomColor = "transparent")
              }
            >
              {t("sns.title")}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {currentUser ? (
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span
                  style={{
                    fontSize: "0.9em",
                    color: "var(--text-secondary)",
                    fontWeight: "500",
                  }}
                >
                  {t("fanMessages.welcome")}, {currentUser.username}!
                </span>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={handleLogout}
                  style={{ borderRadius: "20px", padding: "0.375rem 1rem" }}
                >
                  {t("fanMessages.logout")}
                </Button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "10px" }}>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{ borderRadius: "20px", padding: "0.375rem 1rem" }}
                  >
                    {t("fanMessages.login")}
                  </Button>
                </Link>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <Button
                    variant="primary"
                    size="sm"
                    style={{ borderRadius: "20px", padding: "0.375rem 1rem" }}
                  >
                    {t("fanMessages.register")}
                  </Button>
                </Link>
              </div>
            )}
            <div style={{ marginLeft: "10px" }}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button onClick={toggleMenu} className="hamburger-btn">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link
            to="/about"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("about.title")}
          </Link>
          <Link
            to="/concert"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("concert.title")}
          </Link>
          <Link
            to="/discography"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("discography.title")}
          </Link>
          <Link
            to="/fan-messages"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("fanMessages.title")}
          </Link>
          <Link
            to="/faq"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("faq.title")}
          </Link>
          <Link
            to="/settings"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("settings.title")}
          </Link>
          <Link
            to="/sns"
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t("sns.title")}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
