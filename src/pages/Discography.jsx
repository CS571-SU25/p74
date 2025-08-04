import { useTranslation } from "react-i18next";

function Discography() {
  const { t } = useTranslation();
  const videos = [
    {
      key: "discography.mv1",
      src: "https://www.youtube.com/embed/0xSiBpUdW4E",
      title: "Marigold Music Video",
    },
    {
      key: "discography.mv2",
      src: "https://www.youtube.com/embed/9qRCARM_LfE?si=T2-V2OZ2z2F3rt8k",
      title: "I Want to Convey Love Music Video",
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">{t("discography.title")}</h1>
      <div className="page-section">
        <ul>
          <li>{t("discography.song1")}</li>
          <li>{t("discography.song2")}</li>
          <li>{t("discography.song3")}</li>
        </ul>
      </div>
      <div className="page-section">
        <h2>{t("discography.mv")}</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {videos.map(({ key, src, title }) => (
            <div
              key={key}
              style={{
                width: "100%",
                maxWidth: "100%",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>
                {t(key)}
              </h3>
              {/* 16:9 비율 박스 */}
              <div
                style={{
                  position: "relative",
                  paddingTop: "56.25%", // 9/16*100
                }}
              >
                <iframe
                  src={src}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discography;
