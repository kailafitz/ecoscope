const LandingMontage: React.FC = async () => {
  const data = await fetch("https://api.pexels.com/videos/videos/1828452", {
    headers: {
      "media-type": "media",
      Authorization: process.env.PEXELS_API_KEY || "",
    },
  }).then((res) => {
    return res.json();
  });

  return (
    data && (
      <video
        poster="/_assets/poster.png"
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
        <source
          src={data["video_files"][5]["link"]}
          type="video/mp4"
          media="(min-width: 1024px)"
        />
        <source
          src={data["video_files"][2]["link"]}
          type="video/mp4"
          // media="(min-width: 768px)"
        />
        {/* <source src={data["video_files"][2]["link"]} type="video/mp4" /> */}
      </video>
    )
  );
};

export default LandingMontage;
