import { ITabButtonProps } from "@/components/tab-button";
import { IHelpButtonProps } from "@/components/help-button";
import { IProfileButtonProps } from "@/components/profile-button";
import UserProfileImage from "@/assets/images/user.png";
import DiscordIcon from "@/assets/icons/discord.svg";
import XIcon from "@/assets/icons/x.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { IActivityListItemProps } from "@/components/activity-list-item";

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

export const lastActivities: IActivityListItemProps[] = [
  {
    type: "transaction",
    point: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "bridged",
    point: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "bridged",
    point: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "transaction",
    point: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "transaction",
    point: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
];
