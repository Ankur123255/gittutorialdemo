const posts = [];
let lastActivityTime = null;

function createPost(postTitle) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title: postTitle });
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}

createPost("Post 1")
    .then(() => {
        return updateLastUserActivityTime();
    })
    .then(() => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);
        return createPost("Post 2");
    })
    .then(() => {
        return updateLastUserActivityTime();
    })
    .then(() => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);
        return deleteLastPost();
    })
    .then(deletedPost => {
        console.log("Deleted Post:", deletedPost);
        console.log("New Posts:", posts);
    })
    .catch(error => {
        console.log(error);
    });