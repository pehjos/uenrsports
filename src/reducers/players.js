import {PLAYER,CREATEPLAYER,DELETEPLAYER, FETCH_BY_SEARCH, FETCH_BY_CREATOR, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, players: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case PLAYER:
      return {
        ...state,
     players: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
    case FETCH_BY_CREATOR:
      return { ...state, players: action.payload.data };
    case FETCH_POST:
      return { ...state, player: action.payload.post };
    case LIKE:
      return { ...state, players: state.players.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case COMMENT:
      return {
        ...state,
    player: state.players.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    case CREATEPLAYER:
      return { ...state, players: [...state.players, action.payload] };
    case UPDATE:
      return { ...state, players: state.players.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETEPLAYER:
      return { ...state, players: state.players.filter((post) => post._id !== action.payload) };
  
      default:
      return state;
  }
};
