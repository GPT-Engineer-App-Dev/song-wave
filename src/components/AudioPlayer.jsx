import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";

const AudioPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
      }
    };
  }, []);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
    }
  };

  const skipBack = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = Math.max(audio.currentTime - 10, 0);
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Button onClick={skipBack} variant="outline" size="icon">
          <SkipBack className="h-5 w-5" />
        </Button>
        <Button onClick={togglePlayPause} variant="outline" size="icon">
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
        <Button onClick={skipForward} variant="outline" size="icon">
          <SkipForward className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex-grow mx-4">
        <Progress value={progress} />
      </div>
      <div className="flex items-center space-x-4">
        <span>{song.title}</span>
        <span>{song.artist}</span>
      </div>
      <audio ref={audioRef} src={song.url} />
    </div>
  );
};

export default AudioPlayer;