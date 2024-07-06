import React, { useState, useRef } from 'react';

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div>
        <img src={song.albumArt} alt={song.title} />
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
      <audio ref={audioRef} src={song.url}></audio>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MusicPlayer;
