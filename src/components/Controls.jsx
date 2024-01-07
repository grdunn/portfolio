import { useState, useEffect, useRef, useCallback } from "react";
import {
  IconVolumeMute,
  IconVolumeMid,
  IconVolumeLoud,
  IconSkip,
  IconPlay,
  IconPause,
  IconForward,
} from "../components/Icons";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 15;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 15;
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    if (!audioRef.current.currentTime) {
      return;
    }
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper">
      <div className="volume">
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <IconVolumeMute />
          ) : volume < 40 ? (
            <IconVolumeMid />
          ) : (
            <IconVolumeLoud />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          style={{
            background: `linear-gradient(to right, #f50 ${volume}%, #ccc ${volume}%)`,
          }}
        />
      </div>
      <div className="controls">
        <button className="skip" onClick={skipBackward}>
          <IconSkip />
        </button>
        <button className="play" onClick={togglePlayPause}>
          {isPlaying ? <IconPlay /> : <IconPause />}
        </button>
        <button className="skip" onClick={skipForward}>
          <IconForward />
        </button>
      </div>
      <div className="extra"></div>
    </div>
  );
};

export default Controls;
