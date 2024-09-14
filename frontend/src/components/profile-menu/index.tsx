"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ProfileButton from "../profile-button";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import SignOutIcon from "@/assets/icons/signout.svg";

export interface IUser {
  username: string;
  avatar: string | StaticImport;
  link?: string;
}

interface IProfileMenu {
  user: IUser;
}

const ProfileMenu: React.FC<IProfileMenu> = ({ user }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={clsx(
        "bg-elevation-3 rounded-content p-2",
        "absolute top-0 right-0 z-50"
      )}>
      <ProfileButton
        text={user.username}
        link={user.link}
        icon={
          <Image
            className="w-[18px] h-[18px] object-cover rounded-full"
            src={user.avatar}
            alt={user.username}
          />
        }
        iconPlacement="start"
        onClick={toggleOpen}
        isActive={isOpen}
        isBlock
      />
      {isOpen ? (
        <ProfileButton
          className="mt-3"
          text="Sign out"
          link=""
          icon={<SignOutIcon />}
          iconPlacement="end"
          isBlock
        />
      ) : null}
    </div>
  );
};

export default ProfileMenu;
