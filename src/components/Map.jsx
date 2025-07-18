function Map() {
  return (
    <div style={{ width: "100%", maxWidth: 600, margin: "1em auto" }}>
      <iframe
        title="올림픽홀 위치"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.964964857839!2d127.0709603153106!3d37.5194099798037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5b1e2e2b6e1%3A0x2e2e2b6e1e2e2b6e!2z7ISc7Jq47Yq567OE7IucIOyEnOyauO2KuOuzuOq1rCDshJzsmrjtirjsv7Hsp4A!5e0!3m2!1sko!2skr!4v1680000000000!5m2!1sko!2skr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
