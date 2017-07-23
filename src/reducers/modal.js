import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState = {
  selectedVideo: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedVideo: action.video.selectedVideo
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedVideo: null
      };
    default:
      return state;
  }
}
