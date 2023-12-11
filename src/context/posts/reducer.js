import * as types from './types';

export const initialState = {
  loading: false,
  error: {},
  posts: [],
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case types.FETCH_POSTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    }
    case types.FETCH_POSTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
  }
};
