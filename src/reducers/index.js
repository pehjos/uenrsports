import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import players from './players';
import coach from './coach';
import stats from './stats';
import rent from './rent';
import temp from './temp';
export const reducers = combineReducers({ posts, auth,temp,rent ,coach,stats,players});