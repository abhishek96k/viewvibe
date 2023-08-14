import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" alt="Thumbnail" src={thumbnails.medium.url} />
      <div>
        <h2 className="font-bold py-2">{title}</h2>
        <p className="">{channelTitle}</p>
        <p className="">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

// Higher order component
const RedBorderVideoCard = (VideoCard) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard />
    </div>
  )
}

export default VideoCard;
