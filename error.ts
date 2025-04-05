// // Define the type of the response
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }
  
//   // Fetch data from a public API
//   async function fetchPosts(): Promise<void> {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const posts: Post[] = await response.json();
      
//       // Log the first post
//       console.log("First Post Title:", posts[0].title);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   }
  
//   fetchPosts();
  

// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   }
  
//   function fetchPostsPromise(): void {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((posts: Post[]) => {
//         console.log("First Post Title:", posts[0].title);
//       })
//       .catch((error) => {
//         console.error("Error fetching posts:", error);
//       });
//   }
  
//   fetchPostsPromise();
  

// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched using Promise!");
//       }, 1000);
//     });
//   }
  
//   fetchData().then(data => {
//     console.log(data);
//   });
  

// function fetchDataAsync(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Data fetched using async/await!");
//       }, 1000);
//     });
//   }
  
//   async function getData() {
//     const data = await fetchDataAsync();
//     console.log(data);
//   }
  
//   getData();
  