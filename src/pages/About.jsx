import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("about.title")}</h1>
      <div style={{ margin: "2em 0" }}>
        {/* 이미지 자리 */}
        <div
          style={{
            width: 200,
            height: 200,
            background: "#eee",
            margin: "0 auto 1em",
            borderRadius: "50%",
          }}
        />
        <p>
          {t(
            "about.desc",
            "아이묭은 일본의 싱어송라이터로, 감성적인 가사와 독특한 음색으로 많은 사랑을 받고 있습니다."
          )}
          <br />
          {t(
            "about.songs",
            "대표곡: 마리골드, 사랑을 전하고 싶다, 하로하로 등"
          )}
        </p>
      </div>
    </div>
  );
}

export default About;
