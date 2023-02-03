export async function getPostData(id: string) {
  let data: any = null;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
}

export async function getSortedPostsData(): Promise<Array<any>> {
  // fetch post data from an external API endpoint
  let data: Array<any> = [];
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=3"
    );
    data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return data;
  }
}
