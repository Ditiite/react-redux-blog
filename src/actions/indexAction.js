import * as types from '../constants/ActionTypes';
/*
* Action is an object with atleast one part - type
* entire function called an action creator
*/
export const selectPost = (post) => {
    return {
        type: types.SELECT_POST,
        payload: post
    }
}

export const deletePost = (id) => {
    return {
        type: types.DELETE_POST,
        payload: id
    }
}

export const addPost = (post) => {
    return {
        type: types.ADD_POST,
        payload: post
    }
}
