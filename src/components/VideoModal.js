import React from 'react';
import Modal from 'react-modal';

const VidModal = (props) => {
  if (!props.selectedVid) {
    return <div></div>
  }

  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/{props.selectedVid.image.id.videoId}" frameborder="0" allowfullscreen></iframe>
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default VidModal;
