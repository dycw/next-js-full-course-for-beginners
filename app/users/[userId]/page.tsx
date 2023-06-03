import getAllUsers from "../../../lib/getAllUsers";
import getUser from "../../../lib/getUser";
import getUserPosts from "../../../lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  const user = await getUser(userId);
  if (!user.name) {
    return { title: "User Not Found" };
  }
  return { title: user.name, description: `This is the page of ${user.name}` };
}

export async function generateStaticParams() {
  const users = await getAllUsers();
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}

export default async function UserPage({ params: { userId } }: Params) {
  const user = await getUser(userId);
  const userPostsData = getUserPosts(userId);
  if (!user.name) notFound();
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* @ts-ignore */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
