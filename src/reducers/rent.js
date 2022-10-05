import {DELETERENT,RENT, CREATERENT, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, rent: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case RENT:
      return {
        ...state,
       rent: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state,rent: action.payload.data };
    case FETCH_POST:
      return { ...state,rent: action.payload.post };
    case LIKE:
      return { ...state,rent: state.rent.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
       rent: state.rent.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATERENT:
      return { ...state,rent: [...state.rent, action.payload] };
    case UPDATE:
      return { ...state,rent: state.rent.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETERENT:
      return { ...state,rent: state.rent.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
