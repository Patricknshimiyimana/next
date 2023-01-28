export async function getAllPostTitles() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.title,
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = res.json();
  return data;
}

export async function getSortedPostsData() {
  // fetch post data from an external API endpoint
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
  const data = res.json();
  return data;
}

