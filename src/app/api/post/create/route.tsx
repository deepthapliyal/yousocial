import { postSchema } from "@/app/validationSchema";
import { auth } from "@/auth";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = postSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const session = await auth();
  if (!session) {
    return NextResponse.json(
      { error: "unauthorized" },
      {
        status: 401,
      },
    );
  }
  const userEmail = session?.user?.email!;
  const newPost = await prisma.post.create({
    data: { content: body.content, author: { connect: { email: userEmail } } },
  });
  return NextResponse.json(newPost, { status: 201 });
}
