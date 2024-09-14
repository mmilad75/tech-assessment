import { Meta, StoryObj } from "@storybook/react";
import HeaderNav, { IHeaderNavProps } from "./index";
import UserProfileImage from "@/assets/images/user.png";

export default {
  title: "Components/HeaderNav",
  component: HeaderNav,
} as Meta;

type Story = StoryObj<IHeaderNavProps>;

export const Default: Story = {
  args: {
    tabs: [
      { text: "Dashboard", link: "", state: "active" },
      { text: "Tasks", link: "" },
      { text: "Badges", link: "" },
      { text: "Leaderboard", link: "" },
      { text: "Connections", link: "" },
    ],
    helpButton: { text: "How It Works", link: "#" },
    user: {
      username: "bongo.eth",
      avatar: UserProfileImage,
    },
  },
};
