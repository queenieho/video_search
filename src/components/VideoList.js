import React from 'react';
import VideoItem from './VideoItem';
import { CSSTransitionGroup } from 'react-transition-group';

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
            transitionLeaveTimeout={400}>
        {videoItems}
      </CSSTransitionGroup>
    </div>
  );
};

export default VideoList;
