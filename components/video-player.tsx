"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="w-full aspect-video flex justify-center items-center overflow-hidden rounded-md border-2 border-white shadow-xl">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
