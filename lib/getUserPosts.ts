export default async function getUserPosts(userId: string): Promise<Post[]> {
  const params = new URLSearchParams({ userId });
  const url = `https://jsonplaceholder.typicode.com/posts/?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
