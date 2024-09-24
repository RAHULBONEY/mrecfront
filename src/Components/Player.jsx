import React, { useRef } from "react";
import "../Styles/Player.css"; // Import custom styles

const Player = ({ trackUri }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={trackUri} />
      <div className="audio-controls">
        <button onClick={handlePlay} className="play-button">
          Play
        </button>
        <button onClick={handlePause} className="pause-button">
          Pause
        </button>
      </div>
    </div>
  );
};

export default Player;
