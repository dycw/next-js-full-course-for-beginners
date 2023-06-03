import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <p>
        <Link href="/users">Users</Link>
      </p>
    </main>
  );
}
