export default async function getUsers(userId: string): Promise<User> {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("failed to fetch data");
  return res.json();
}
