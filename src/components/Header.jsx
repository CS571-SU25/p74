import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";

function Header() {
  return (
    <header
      style={{
        padding: "1em 0",
        borderBottom: "1px solid #eee",
        marginBottom: "1em",
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              fontWeight: "bold",
              fontSize: "1.2em",
              marginRight: "1em",
            }}
          >
            <img src="/Main_logo.png" alt="AIMYONG KOREA LIVE" style={{ width: "100px" }} />
          </Link>
          <Link to="/about" style={{ marginRight: "1em" }}>
            소개
          </Link>
          <Link to="/concert" style={{ marginRight: "1em" }}>
            공연정보
          </Link>
          <Link to="/discography" style={{ marginRight: "1em" }}>
            앨범
          </Link>
          <Link to="/fan-messages" style={{ marginRight: "1em" }}>
            팬메시지
          </Link>
          <Link to="/faq" style={{ marginRight: "1em" }}>
            FAQ
          </Link>
          <Link to="/settings" style={{ marginRight: "1em" }}>
            설정
          </Link>
          <Link to="/sns">SNS</Link>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
