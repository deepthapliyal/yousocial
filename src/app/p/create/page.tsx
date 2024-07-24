"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const Page = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async () => {
    const trimmedContent = content.trim();
    if (trimmedContent === "") {
      toast({
        variant: "destructive",
        description: "Please write something before posting.",
      });
      return;
    }

    setIsPosting(true);

    try {
      const response = await fetch("/api/post/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: trimmedContent }),
      });

      if (response.ok) {
        setContent("");
        toast({
          description: "Post created successfully!",
        });
        router.push("/profile");
      } else {
        console.error("Error creating post:", response.status);
        toast({
          variant: "destructive",
          description: "Failed to create post. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast({
        variant: "destructive",
        description: "An error occurred. Please try again.",
      });
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="pt-[10vh] flex flex-col p-2 gap-4">
      <h2 className="text-xl font-semibold">Create Your Post</h2>{" "}
      {/* Improved heading */}
      <Textarea
        onChange={(e) => setContent(e.target.value)}
        value={content}
        placeholder="Start writing here..."
        rows={10}
        className="" // Prevent resizing
      />
      <Button disabled={isPosting} onClick={handlePost}>
        {isPosting ? "Posting..." : "Post"} {/* Indicate posting state */}
      </Button>
    </div>
  );
};

export default Page;
