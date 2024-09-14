import { ITabButtonProps } from "@/components/tab-button";
import { IHelpButtonProps } from "@/components/help-button";
import { IProfileButtonProps } from "@/components/profile-button";
import UserProfileImage from "@/assets/images/user.png";
import DiscordIcon from "@/assets/icons/discord.svg";
import XIcon from "@/assets/icons/x.svg";
import GithubIcon from "@/assets/icons/github.svg";

export const headerTabs: ITabButtonProps[] = [
  { text: "Dashboard", link: "" },
  { text: "Tasks", link: "" },
  { text: "Badges", link: "", state: "active" },
  { text: "Leaderboard", link: "" },
  { text: "Connections", link: "" },
];

export const headerHelpButton: IHelpButtonProps = {
  text: "How It Works",
  link: "#",
};

export const profileButton: IProfileButtonProps = {
  text: "bongo.eth",
  image: UserProfileImage,
};

export const socialMedia = [
  { link: "#", Icon: DiscordIcon },
  { link: "#", Icon: XIcon },
  { link: "#", Icon: GithubIcon },
];
