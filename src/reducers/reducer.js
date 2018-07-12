import * as types from "../constants/ActionTypes";
import { initialState } from './initialState';

const generateId = ((startId) => {
    let _id = startId;
    return () => {
        return ++_id;
    }
})(initialState.currentId);

/**
 * @param {post[]} posts
 * @param {type: any, payload: any} action 
 */

export const postsReducer = (posts = initialState.posts, action) => {

    switch (action.type) {
        case types.ADD_POST:
            console.log('This is reducer', posts, action.payload);
            return [
                ...posts, {
                    ...action.payload,
                    id: generateId()
                }
            ];
        case types.DELETE_POST:
            return [...posts.filter((post) => post.id !== action.payload)];

        case types.INCREMENT_LIKES:
            console.log('REDUSER -POSTS -again', posts, action);
            const i = action.index;
            return [
                ...posts.slice(0, i), // Befor the one we are updating
                { ...posts[i], likes: posts[i].likes + 1 },
                ...posts.slice(i + 1), // After the one we are updating
            ];

        default:
            return posts;
    }
}


export const activePostReducer = (posts = initialState.activePost, action) => {

    switch (action.type) {
        case types.SELECT_POST:
            return action.payload;

        default:
            return {};
    }
}

