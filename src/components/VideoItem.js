import React from 'react';

// takes the object from VideoList and passes the URL into an image element
const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="video-item" onClick={() => onVideoSelect(video)}>
      <div className="video-item-thumb">
        <img src={video.snippet.thumbnails.medium.url} alt=''/>
      </div>
      <div className="vid-item-text">
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoItem;