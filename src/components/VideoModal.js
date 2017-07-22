import React from 'react';
import Modal from 'react-modal';

const VideoModal = (props) => {
  if (!props.selectedVideo) {
    return <div></div>
  }

  var url = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;


  return (
    <Modal
      className={{
        base: 'modal',
        afterOpen: 'modal_after-open',
        beforeClose: 'modal_before-close'
      }}
      overlayClassName={{
        base: 'modalOverlay',
        afterOpen: 'modalOverlay_after-open',
        beforeClose: 'modalOverlay_before-close'
      }}
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }
      contentLabel="Modal" >
      <div>
        <button className="modal-btn" onClick={() => props.onRequestClose()}>close</button>
        <iframe title={`${props.selectedVideo.id.videoId}`} src={url} allowFullScreen></iframe>
      </div>
    </Modal>
  );
};

export default VideoModal;
