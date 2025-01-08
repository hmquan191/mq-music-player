import React, { useState } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import Controls from "./controls";

export default function AudioPlayer({
  currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
//   const [trackProgress, setTrackProgress] = useState(0);
const [trackProgress] = useState(0);

//   const audioSrc = total[currentIndex]?.track.preview_url;

  // Calculate track duration
  const duration = currentTrack?.duration_ms || 0;
  const minutes = Math.floor(duration / 60000);
  const seconds = Math.floor((duration % 60000) / 1000);

  // Format duration
  const formattedDuration = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // Get artists
  const artists = currentTrack?.album?.artists?.map((artist) => artist.name) || [];

  // Get album image
  const imageUrl = currentTrack?.album?.images?.[0]?.url;

  return (
    <div className="player-body">
      <div className="player-left-body">
        <ProgressCircle
          percentage={(trackProgress / duration) * 100 || 0}
          isPlaying={isPlaying}
          image={imageUrl}
          size={300}
          color="#C96850"
        />
      </div>
      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name || "Unknown Title"}</p>
        <p className="song-artist">{artists.join(" | ") || "Unknown Artist"}</p>
        <div className="player-right-bottom">
          <div className="song-duration flex">
            <p className="duration">
              {Math.floor(trackProgress / 60000)}:
              {Math.floor((trackProgress % 60000) / 1000)
                .toString()
                .padStart(2, "0")}
            </p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">{formattedDuration}</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={() =>
              setCurrentIndex((prev) => (prev + 1) % total.length)
            }
            handlePrev={() =>
              setCurrentIndex((prev) =>
                prev - 1 < 0 ? total.length - 1 : prev - 1
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
