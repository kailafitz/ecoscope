const LandingMontage = async () => {
  const API_KEY = "CrPzvcCqf4j1bJUKwS3HqAdZTclKFg7cba5LjjjlcV4A5jlXRrLt5YDj";
  const data = await fetch("https://api.pexels.com/videos/videos/1828452", {
    headers: {
      "media-type": "media",
      Authorization: API_KEY,
    },
  }).then((res) => {
    return res.json();
  });

  return (
    data && (
      <video
        poster=""
        className="object-cover h-screen left-0 top-0 absolute"
        height="100%"
        width="100%"
        // preload="none"
        loop
        controls={false}
        autoPlay
        muted
        playsInline
      >
        <source src={data["video_files"][2]["link"]} type="video/mp4" />
      </video>
    )
  );
};

export default LandingMontage;
