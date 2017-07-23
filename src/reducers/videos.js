import { REQUEST_VIDEOS } from '../actions';

const initialState = {
  data: []
}

// returns an array of result items
export default function videos(state = initialState, action) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return {
        ...state, data: action.payload.body.items
      };
    default:
      return state;
  }
}
