import { ITabButtonProps } from "@/components/tab-button";
import { IHelpButtonProps } from "@/components/help-button";
import { IProfileButtonProps } from "@/components/profile-button";
import UserProfileImage from "@/assets/images/user.png";
import DiscordIcon from "@/assets/icons/discord.svg";
import XIcon from "@/assets/icons/x.svg";
import GithubIcon from "@/assets/icons/github.svg";
import BadgeIcon from "@/assets/images/badge1.png";
import { IBadgesCarouselItem } from "@/components/badges-carousel/badges-carousel-item";
import { IMetricItemProgressProps } from "@/components/metric-item-progress";
import { IBadgeProps } from "@/components/badge";
import { IActivityItem } from "@/components/last-activities";
import { IFooterLink } from "@/components/footer";

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

export const lastActivities: IActivityItem[] = [
  {
    type: "transaction",
    points: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "bridged",
    points: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "bridged",
    points: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "transaction",
    points: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
  {
    type: "transaction",
    points: 560,
    date: "2024-09-11T00:16:08.501+00:00",
    transactionId:
      "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
  },
];

export const badges: IBadgesCarouselItem[] = [
  {
    state: "multi",
    earned: false,
    title: "1",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "2",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "3",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "4",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "5",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "6",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "7",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "8",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "9",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
  {
    state: "multi",
    earned: false,
    title: "10",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
    rewardDetails: "Liquidity Provision to ETH/USDC",
  },
];

export const badgeProgress: IMetricItemProgressProps = {
  totalEarnings: 3000,
  actions: [
    {
      title: "Provide at least $50 Liquidity to USDT/ETH",
      actionCard: "complete",
    },
    {
      title: "Provide at least $50 Liquidity to USDT/ETH",
      actionCard: "default",
    },
    {
      title: "Provide at least $50 Liquidity to USDT/ETH",
      actionCard: "default",
    },
  ],
};

export const communityBadges: IBadgeProps[] = [
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: false,
    title: "Liquidity Machine",
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
  {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: BadgeIcon,
  },
];

export const footerLinks: IFooterLink[] = [
  {
    title: "Docs",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Terms & Conditions",
    href: "#",
  },
];
