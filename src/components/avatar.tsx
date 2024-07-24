import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import React from "react";
  

  interface UserAvatarProps {
    name: string;
    src: string;
  }
  

const UserAvatar: React.FC<UserAvatarProps> =({name, src})=> {
    return (
      <Avatar>
        <AvatarImage src={src} alt="@shadcn" />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
    )
  }
  

export default UserAvatar ;