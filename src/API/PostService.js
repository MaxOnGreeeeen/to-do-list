export default class PostService{
    static async getAllPosts(){
        const resultFromBack = await fetch('https://jsonplaceholder.typicode.com/posts')
        return resultFromBack.json()
    }
}