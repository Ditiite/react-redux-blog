
let currentId = 2;

let posts = [
    {
        id: 1,
        title: 'My day in Integrify',
        text: 'this is text',
        category: 'work',
        ingredients: [{
            amount: 1,
            ingredient: 'apple'
        },
        {
            amount: 2,
            ingredient: 'banana'
        }]
    },
    {
        id: 2,
        title: 'My talk at React Meetup',
        text: 'this is text',
        category: 'Speech',
        ingredients: [19, 'toamto']
    }
];

export function getAll() {
    return posts;
}

export function addPost(title, text, category) {
    posts.push({
        id: ++currentId,
        title,
        text,
        category,
        ingredients
    });
}

export function getPost(id) {
    return posts.find((post) => post.id === id);
}

export function deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
}


