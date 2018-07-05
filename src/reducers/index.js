// Function to combine all the reducers and to combine in one object
import { combineReducers } from 'redux';
import { postsReducer, activePostReducer } from './reducer';

const allReducers = combineReducers({
    posts: postsReducer,
    activePost: activePostReducer
});

export default allReducers;