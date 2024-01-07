import { useRef, useState } from "react";
import { tracks } from "../data/tracks";
import "./audio-player.scss";

import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = (props) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const currentTrack = props.audio;

  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <>
      <div className="audio-player">
        <div className="inner">
          <DisplayTrack
            {...{
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default AudioPlayer;
