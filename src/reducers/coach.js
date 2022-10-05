import {DELETECoach,Coach, CREATECoach, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, coach: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case Coach:
      return {
        ...state,
       coach: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state,coach: action.payload.data };
    case FETCH_POST:
      return { ...state,coach: action.payload.post };
    case LIKE:
      return { ...state,coach: state.coach.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
       coach: state.coach.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATECoach:
      return { ...state,coach: [...state.coach, action.payload] };
    case UPDATE:
      return { ...state,coach: state.coach.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETECoach:
      return { ...state,coach: state.coach.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
