// @ts-nocheck
"use client";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";

import { signIn } from "@/auth/helpers";
import UserAvatar from "@/components/avatar";
import Link from "next/link";

export default function AuthButton() {
  const session = useSession();

  return session?.data?.user ? (
    <Link href={"/profile"}>
      <UserAvatar
        name={session.data?.user?.name}
        src={session.data?.user?.image}
      />
    </Link>
  ) : (
    <>
      <Button onClick={async () => await signIn()}>Sign In</Button>
    </>
  );
}
