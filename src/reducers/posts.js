/*
* Reducer takes in two things:
* 1. the action (info about what happened)
* 2. copy of current state.
*/
export default function() {
    return [
        {
            id: 1,
            title: 'My day in Integrify',
            text: 'this is text',
            category: 'work',
            likes: 0
        },
        {
            id: 2,
            title: 'My talk at React Meetup',
            text: 'this is text',
            category: 'Speech',
            likes: 0
        }
    ];
}


//export default posts;