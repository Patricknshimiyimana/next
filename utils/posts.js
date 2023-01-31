export async function getAllPostTitles() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
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
  let data = null;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    data = res.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
}

export async function getSortedPostsData() {
  // fetch post data from an external API endpoint
  let data = [];
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
}
