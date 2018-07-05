
export default function (state = {}, action) {
    switch (action.type) {
        case 'POST_SELECTED':
            return action.data;
        case 'POST_DELETED':
            return action.data;
        default:
            return state;
    }
}