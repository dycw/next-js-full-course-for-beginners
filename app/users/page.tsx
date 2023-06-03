import getAllUsers from "../../lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const users = await getAllUsers();
  return (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
        <br />
        {users.map((user) => (
          <p key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
        ))}
      </h2>
    </section>
  );
}
