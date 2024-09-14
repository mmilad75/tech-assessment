import { Meta, StoryObj } from "@storybook/react";
import ProfileButton, { IProfileButtonProps } from "./index";
import Icon from "@/assets/icons/transaction.svg";

export default {
  title: "Components/ProfileButton",
  component: ProfileButton,
} as Meta;

type Story = StoryObj<IProfileButtonProps>;

export const Default: Story = {
  args: {
    text: "bongo.eth",
  },
};

export const IconLeft: Story = {
  args: {
    text: "bongo.eth",
    icon: <Icon />,
    iconPlacement: "start",
  },
};

export const IconRight: Story = {
  args: {
    text: "bongo.eth",
    icon: <Icon />,
    iconPlacement: "end",
  },
};

export const Active: Story = {
  args: {
    text: "bongo.eth",
    icon: <Icon />,
    iconPlacement: "end",
    isActive: true,
  },
};

export const Block: Story = {
  args: {
    text: "bongo.eth",
    icon: <Icon />,
    iconPlacement: "end",
    isBlock: true,
  },
};
