class PostService {
  constructor() {}
  async getAllPosts() {
    const resultFromBack = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return resultFromBack.json();
  }
}

export default new PostService();
