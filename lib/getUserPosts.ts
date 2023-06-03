export default async function getUserPosts(userId: string): Promise<Post[]> {
  const params = new URLSearchParams({ userId });
  const url = `https://jsonplaceholder.typicode.com/posts/?${params.toString()}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) undefined;
  return res.json();
}
