import { endPoints } from '../../http/endpoints';
import { fetchPosts, setErrorFetchPosts, setFetchPosts } from './actions';

export const fetchJSONPosts = async (dispatch) => {
  dispatch(fetchPosts());
  try {
    const response = await fetch(endPoints.fetchPosts);
    const result = await response.json();
    dispatch(setFetchPosts(result));
  } catch (error) {
    dispatch(setErrorFetchPosts(error));
  }
};
