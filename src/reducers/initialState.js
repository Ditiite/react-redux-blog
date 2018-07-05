// Reducer is basically just a piece of data to save in store
export const initialState = {
    activePost: {},
    posts: [
        {
            id: 1,
            title: 'My day in Integrify',
            text: 'this is text',
            category: 'work'
        },
        {
            id: 2,
            title: 'My talk at React Meetup',
            text: 'this is text',
            category: 'Speech'
        }
    ],
    currentId: 2
};
