import * as types from "../constants/ActionTypes";
import { initialState } from './initialState';

const generateId = ((startId) => {
    let _id = startId;
    return () => {
        return ++_id;
    }
})(initialState.currentId);

/**
 * 
 * @param {post[]} posts
 * @param {type: any, payload: any} action 
 */
export const postsReducer = (posts = initialState.posts, action) => {
    
    switch (action.type) {
        case types.ADD_POST:
            return [
                ...posts, {
                    ...action.payload,
                    id: generateId()
                }
            ];
        case types.DELETE_POST:
            return [...posts.filter((post) => post.id !== action.payload)]
        default: 
            return posts;
    }
}


export const activePostReducer = (activePost = initialState.activePost, action) => {
    switch (action.type) {
        case types.SELECT_POST: 
            return action.payload;
        default:
            return {};
    }
}
