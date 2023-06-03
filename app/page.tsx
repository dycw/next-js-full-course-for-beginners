import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function Home() {
  return (
    <>
      <main>
        <h1>Hello World</h1>
        <Link href="/about">Go to About Page</Link>
      </main>
    </>
  );
}
