/*
* Action is an object with atleast one part - type
* entire function called an action creator
*/
export const selectPost = (post) => {
    console.log('You clicked on post', post.title);
    return {
        type: "POST_SELECTED",
        data: post
    }
}

export const deletePost = (posts) => {

    return {
        type: "POST_DELETED",
        data: posts
    }
}
