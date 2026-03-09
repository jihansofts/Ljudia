import { useEffect, useState } from "react";

const VIDEOS = [
  {
    id: "laugh",
    title: "Laugh Until It Hurts",
    src: "/videos/Laugh-until-it-hurts.mp4",
  },
  {
    id: "soar",
    title: "Soar To New Heights",
    src: "/videos/Soar-to-new-heights.mp4",
  },
];

export default function HomeSection() {
  const [activeVideoId, setActiveVideoId] = useState(VIDEOS[0].id);
  const activeVideoIndex = Math.max(
    VIDEOS.findIndex((video) => video.id === activeVideoId),
    0,
  );
  const nextVideo = VIDEOS[(activeVideoIndex + 1) % VIDEOS.length];
  const showNextVideo = () => {
    setActiveVideoId((currentVideoId) => {
      const currentVideoIndex = Math.max(
        VIDEOS.findIndex((video) => video.id === currentVideoId),
        0,
      );

      return VIDEOS[(currentVideoIndex + 1) % VIDEOS.length].id;
    });
  };
  const ensurePlayback = (event) => {
    const playPromise = event.currentTarget.play();

    if (playPromise) {
      playPromise.catch(() => {});
    }
  };

  useEffect(() => {
    const intervalId = window.setInterval(showNextVideo, 8000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-28 overflow-hidden bg-stone-950"
    >
      {VIDEOS.map((video) => {
        const isActive = video.id === activeVideoId;

        return (
          <video
            key={video.id}
            aria-hidden={!isActive}
            className={[
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
              isActive ? "opacity-100" : "opacity-0",
            ].join(" ")}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={ensurePlayback}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      })}

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.28),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.58)_100%)]" />

      <div className="relative flex min-h-screen items-end px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Switch between the two videos in the homepage player.
          </p>

          <button
            type="button"
            onClick={showNextVideo}
            aria-label={`Switch to ${nextVideo.title}`}
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors hover:bg-amber-300"
          >
            Start your journy
          </button>
        </div>
      </div>
    </section>
  );
}
