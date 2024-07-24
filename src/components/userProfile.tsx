// @ts-nocheck
import Image from "next/image";

const UserProfile = ({ user }: userProfile) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          className="h-32 w-32 rounded-full"
          src={user?.image}
          width={500}
          height={500}
          alt={user?.name}
        />
        {user?.name}
      </div>
    </>
  );
};

export default UserProfile;
