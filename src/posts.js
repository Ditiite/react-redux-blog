
let currentId = 2;

let posts = [
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
];

export function getAll() {
    return posts;
}

export function addPost(title, text, category) {
    posts.push({
        id: ++currentId,
        title,
        text,
        category
    });
}

export function getPost(id) {
    return posts.find( (post) => post.id === id);
}

export function deletePost(id) {
    posts = posts.filter((post) => post.id !== id);
}


