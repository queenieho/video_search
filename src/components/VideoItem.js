import React from 'react';

// takes the object from VideoList and passes the URL into an image element
const VideoItem = (image) => {
  return (
    <div className="video-item">
      <div className="video-item-thumb">
        <img src={image.video.snippet.thumbnails.medium.url} alt=''/>
      </div>
      <div className="vid-item-text">
        <h1>{image.video.snippet.title}</h1>
        <p>{image.video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoItem;