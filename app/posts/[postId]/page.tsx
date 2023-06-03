import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: { postId: string } };

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ postId: post.id }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const posts = getSortedPostsData();
  const post = posts.find((post) => post.id === postId);
  return post !== undefined
    ? { title: post.title }
    : { title: "Post Not Found" };
}

export default async function Post({ params: { postId } }: Props) {
  const posts = getSortedPostsData();
  if (!posts.find((post) => post.id === postId)) notFound();
  const { title, date, contentHtml } = await getPostData(postId);
  const pubDate = getFormattedDate(date);
  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
    </main>
  );
}
