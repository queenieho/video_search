import { combineReducers } from 'redux';
import VideosReducer from './videos';
import ModalReducer from './modal'

// combineReducers is from redux, creates one object that holds several reducers
const rootReducer = combineReducers({
  videos: VideosReducer,
  modal: ModalReducer
});

export default rootReducer;
