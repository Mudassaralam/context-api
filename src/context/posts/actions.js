import * as types from './types';

export const fetchPosts = () => ({
  type: types.FETCH_POSTS,
});
export const setFetchPosts = (result) => ({
  type: types.FETCH_POSTS_SUCCESS,
  payload: result,
});
export const setErrorFetchPosts = (error) => ({
  type: types.FETCH_POSTS_FAILURE,
  payload: error,
});
