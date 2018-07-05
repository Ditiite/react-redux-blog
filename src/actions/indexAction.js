/*
* Action is an object with atleast one part - type
* entire function called an action creator
*/
export const selectPost = (post) => {
    console.log('You clicked on post', post.text);
    return {
        type: "SELECT_POST",
        data: post
    }
}

export const deletePost = (id) => {
    return {
        type: "DELETE_POST",
        payload: id
    }
}

export const addPost = (currentId, title, category, text) => {
    return {
        type: "ADD_POST",
        id: ++currentId,
        title,
        category,
        text
    }
}