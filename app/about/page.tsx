import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page",
};

export default function About() {
  // throw new Error("Not today");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
