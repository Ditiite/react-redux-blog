import * as types from "../constants/ActionTypes";
import { initialState } from './reducer-posts'
//import reducerActivePost from './reducer-active-post';

export const reducerActivePost = (state = initialState, action) => {
    switch (action.type) {
        case types.SELECT_POST:
            return action.data;
        default:
            return state;
    }
}

export const reducerDeletePost = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter((post) => post.id !== action.id)]
            }
        default:
            return state;
    }
}

export const reducerAddPost = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_POST:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    category: action.category,
                    text: action.text
                }
            ]
        default:
            return state;
    }
}


