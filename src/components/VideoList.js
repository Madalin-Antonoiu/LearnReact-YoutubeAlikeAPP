import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  //1. props.videos gets passed from App component
  //2. <div>{props.videos.length}</div>;

  const renderedList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  //return <div>{videos.length}</div>;
  return <div>{renderedList}</div>;
};

export default VideoList;

//https://www.youtube.com/watch?v= + items[0].id
