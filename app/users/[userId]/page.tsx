import getUser from "../../../lib/getUser";
import getUserPosts from "../../../lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  const userData = getUser(userId);
  const user = await userData;
  return { title: user.name, description: `This is the page of ${user.name}` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData = getUser(userId);
  const userPostsData = getUserPosts(userId);
  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
