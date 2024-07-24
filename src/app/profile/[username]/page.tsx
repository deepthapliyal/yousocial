import UserProfile from "@/components/userProfile";
import prisma from "@/lib/db";

type PageProps = {
  params: {
    username: string;
  };
};
// for now id is used as username :: todo : create username for ever user
const Page = async ({ params: { username } }: PageProps) => {
  const user = await prisma.user.findUnique({
    where: { id: username },
  });
  return (
    <>
      <div className="pt-[10vh] flex items-center justify-center">
        {user ? <UserProfile user={user} /> : <div>No User Found </div>}
      </div>
    </>
  );
};

export default Page;
