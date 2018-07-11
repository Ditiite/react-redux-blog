import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import PostsReducer from './posts';
import CommentsReducer from './comments';

// Function to combine all the reducers and to combine in one object

const allReducers = combineReducers({
    posts: PostsReducer,
    comments: CommentsReducer,
    routing: routerReducer
});

export default allReducers;