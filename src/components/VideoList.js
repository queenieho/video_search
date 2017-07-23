import React from 'react';
import VideoItem from './VideoItem';

import { CSSTransitionGroup } from 'react-transition-group';

// takes the array of items 'videos' from App
// render each VideoItem passed down here. Each one gets a key so the
// virtual DOM will know which ones to update if state changes
const VideoList = (props) => {
  const videoItems = props.videos.map((image) => {
    return <VideoItem key={image.id.videoId}
                      video={image}
                      onVideoSelect={props.onVideoSelect} />
  });

  return (
    <div className="video-list">
      <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={200}>
        {videoItems}
      </CSSTransitionGroup>
    </div>
  );
};

export default VideoList;
