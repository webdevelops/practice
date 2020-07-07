import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function fetchPosts() {
  return async dispatch => {
    dispatch(showLoader());
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const json = await response.json();

    setTimeout(() => {
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    }, 500);
  }
}

export function showAlert() {
  return { type: SHOW_ALERT }
}