//Increment
export const increment = (index) => {
     return {
        type: 'INCREMENT_LIKES',
        index
     }
 }

//Add comment
export const addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId, 
        author, 
        comment
    }
}

// Delete comment
export const removeComment = (postId, i) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}


//This we ar importing where ever we ar using dipatch
export const actionCreators = (type, payload) => {
    return (type, payload);
}