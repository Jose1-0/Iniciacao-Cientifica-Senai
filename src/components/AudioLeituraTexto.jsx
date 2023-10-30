import React, { useEffect, useRef } from "react";
import songsLeituraTexto from "./songsLeituraTexto";
import "./Audio.css";

const AudioLeituraTexto = () => {
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
        {songsLeituraTexto.map((song, index) => (
          <source key={index} src={song.src} type={song.type} />
        ))}
      </audio>
    </div>
  );
};

export default AudioLeituraTexto;