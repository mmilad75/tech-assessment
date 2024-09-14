import { Meta, StoryObj } from "@storybook/react";
import ProfileButton, { IProfileButtonProps } from "./index";

export default {
  title: "Components/ProfileButton",
  component: ProfileButton,
} as Meta;

type Story = StoryObj<IProfileButtonProps>;

export const Default: Story = {
  args: {
    text: "bongo.eth",
    image: require("../../assets/images/user.png"),
  },
};
