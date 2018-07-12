import * as types from '../constants/ActionTypes';
/*
* Action is an object with atleast one part - type
* entire function called an action creator
*/

// Select one post
export const selectPost = (post) => {
    return {
        type: types.SELECT_POST,
        payload: post
    }
}

// Delete post
export const deletePost = (id) => {
    return {
        type: types.DELETE_POST,
        payload: id
    }
}

// Add post
export const addPost = (post) => {
    return {
        type: types.ADD_POST,
        payload: post
    }
}

//increment
export const increment = (index) => {
    return {
        type: types.INCREMENT_LIKES,
        index
    }
}