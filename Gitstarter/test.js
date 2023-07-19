// Simulating asynchronous operations with setTimeout

function createPost(post) {

 return new Promise((resolve) => {

  setTimeout(() => {

   // Simulating the creation of a post

   const createdPost = { ...post, createdAt: new Date() };

   resolve(createdPost);

  }, 1000);

 });

}



function updateLastUserActivityTime(user) {

 return new Promise((resolve) => {

  setTimeout(() => {

   // Simulating updating the user's last activity time

   const updatedUser = { ...user, lastActivityTime: new Date() };

   resolve(updatedUser);

  }, 1000);

 });

}



function deletePost(postId) {

 return new Promise((resolve) => {

  setTimeout(() => {

   // Simulating the deletion of a post

   resolve();

  }, 1000);

 });

}



// Usage

const user = { name: 'John', lastActivityTime: null };

const posts = [];



async function updateLastUserActivityFlow() {

 try {

  const post = await createPost({ title: 'New Post' });

  posts.push(post);



  const updatedUser = await updateLastUserActivityTime(user);

  console.log('Posts:', posts);

  console.log('Last Activity Time:', updatedUser.lastActivityTime);



  if (posts.length > 0) {

   const lastPostId = posts[posts.length - 1].id;

   await deletePost(lastPostId);

   console.log('Post Deleted');



   // Log the new set of posts after deletion

   console.log('New Posts:', posts);

  }

 } catch (error) {

  console.error(error);

 }

}



updateLastUserActivityFlow();
   
    
