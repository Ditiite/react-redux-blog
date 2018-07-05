// Function to combine all the reducers and to combine in one object

import { combineReducers } from 'redux';
import PostsReducer from './reducer-posts';
import SelectedPost from './reducer-active-post';

const allReducers = combineReducers({
    posts: PostsReducer,
    selectedPost: SelectedPost
});

export default allReducers;