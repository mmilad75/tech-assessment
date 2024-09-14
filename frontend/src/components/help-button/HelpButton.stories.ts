import { Meta, StoryObj } from "@storybook/react";
import HelpButton, { IHelpButtonProps } from "./index";

export default {
  title: "Components/HelpButton",
  component: HelpButton,
} as Meta;

type Story = StoryObj<IHelpButtonProps>;

export const Default: Story = {
  args: {
    text: "How It Works",
    link: "#",
  },
};
