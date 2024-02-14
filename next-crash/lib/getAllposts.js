export default async function getAllPosts() {
    const posts = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10",
        {
            // cache: "no-cache",
            next: {
                revalidate: 10,
            }
        }
    );
    return posts.json();
}