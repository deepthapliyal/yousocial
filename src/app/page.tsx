import { auth } from "@/auth";
import PostPage from "@/components/postPage";
import prisma from "@/lib/db";
import Link from "next/link";

const Page = async () => {
  const session = await auth();
  const email = session?.user?.email;
  const posts = await prisma.post.findMany({
    where: { author: { email: { not: email } } },
    include: { author: true },
  });
  return (
    <>
      <PostPage posts={posts} />
    </>
  );
};

export default Page;
