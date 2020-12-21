import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <img alt="Ney" src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;

//video.snippet.title - grabbedfrom reading
// Youtube API response object we got
