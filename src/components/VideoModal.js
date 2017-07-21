import React from 'react';
import Modal from 'react-modal';

const VideoModal = (props) => {
  if (!props.selectedVideo) {
    return <div></div>
  }

  var url = `https://www.youtube.com/embed/{props.selectedVideo.image.id.videoId}`;

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div>
        <iframe width="560" height="315" src={`${url}`} frameborder="0" allowfullscreen></iframe>
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default VideoModal;
