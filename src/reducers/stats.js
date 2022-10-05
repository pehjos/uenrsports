import {DELETESTATS, STATS, CREATESTATS, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true,stats: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case STATS:
      return {
        ...state,
      stats: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, stats: action.payload.data };
    case FETCH_POST:
      return { ...state, stats: action.payload.post };
    case LIKE:
      return { ...state, stats: state.stats.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
      stats: state.stats.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATESTATS:
      return { ...state, stats: [...state.stats, action.payload] };
    case UPDATE:
      return { ...state, stats: state.stats.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETESTATS:
      return { ...state, stats: state.stats.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
