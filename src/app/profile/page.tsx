import { auth } from "@/auth";
import PostPage from "@/components/postPage";
import { Button } from "@/components/ui/button";
import UserProfile from "@/components/userProfile";
import prisma from "@/lib/db";
import Link from "next/link";

const Page = async () => {
  const session = await auth();
  const user = session?.user;
  const email = session?.user?.email;
  const posts = await prisma.post.findMany({
    where: { author: { email: email } },
    include: { author: true },
  });
  return (
    <div>
      <div className="pt-[10vh] flex items-center  flex-col gap-4">
        <UserProfile user={user} />
        <Link href={"/p/create"}>
          <Button>Create post</Button>
        </Link>
      </div>
      <PostPage posts={posts} />
    </div>
  );
};

export default Page;
