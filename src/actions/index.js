import request from 'superagent';

export const REQUEST_VIDEOS = 'REQUEST_VIDEOS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const API_URL = 'https://www.googleapis.com/youtube/v3/search?';
const PART = 'snippet';
const RESULTS = 25;
const TYPE = 'video';
const API_KEY = 'AIzaSyBxSJDECpHk5_5e90dJhFit-YR4CSB4AyY';

export function requestVideos(term = null) {
  const data = request.get(`${API_URL}part=${PART}&maxResults=${RESULTS}&q=${term.replace(/\s/g, '+')}&type=${TYPE}&key=${API_KEY}`);
  return {
    type: REQUEST_VIDEOS,
    payload: data
  }
}

export function openModal(video) {
  return {
    type: OPEN_MODAL,
    video
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
