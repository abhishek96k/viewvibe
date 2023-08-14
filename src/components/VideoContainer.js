import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import WatchPage from "./WatchPage";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(YOUTUBE_VIDEOS_API);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
