// Function to combine all the reducers and to combine in one object
import { combineReducers } from 'redux';
import { initialState } from './reducer-posts';
import { reducerActivePost, reducerDeletePost, reducerAddPost } from './reducer';

const allReducers = combineReducers({
    posts: initialState,
    reducerActivePost: reducerActivePost,
    reducerDeletePost: reducerDeletePost,
    reducerAddPost: reducerAddPost
});

export default allReducers;