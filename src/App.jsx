import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ConcertInfo from "./pages/ConcertInfo";
import Discography from "./pages/Discography";
import FanMessages from "./pages/FanMessages";
import FAQ from "./pages/FAQ";
import Settings from "./pages/Settings";
import SNS from "./pages/SNS";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/concert" element={<ConcertInfo />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/fan-messages" element={<FanMessages />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sns" element={<SNS />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
