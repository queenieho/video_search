import React from 'react';
import VideoItem from './VideoItem';

// takes the array of items 'videos' from App
// render each VideoItem passed down here. Each one gets a key so the
// virtual DOM will know which ones to update if state changes
const VideoList = (props) => {
  const videoItems = props.videos.map((image) => {
    // console.log(image.id.videoId);
    return <VideoItem key={image.id.videoId}
                      video={image}
                      onVideoSelect={props.onVideoSelect} />
  });

  return (
    <div className="video-list">{videoItems}</div>
  );
};

export default VideoList;
