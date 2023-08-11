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
        <p className="">Views: {statistics.viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
