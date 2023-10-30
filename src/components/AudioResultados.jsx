import React, { useEffect, useRef } from "react";
import songsResultado from "./songsResultado";
import "./Audio.css";

const AudioResultados = () => {
  const playerRef = useRef(null);

  useEffect(() => {
   // const shouldPlayAudio = Math.random() < 0.5; // 50% de chance de tocar o áudio
   const shouldPlayAudio = true;
    if (shouldPlayAudio) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
  }, []);

  return (
    <div className="audio">
      <audio ref={playerRef}>
        {songsResultado.map((song, index) => (
          <source key={index} src={song.src} type={song.type} />
        ))}
      </audio>
    </div>
  );
};

export default AudioResultados;