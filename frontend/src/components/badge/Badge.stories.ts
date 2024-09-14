import { Meta, StoryObj } from "@storybook/react";
import Badge, { IBadgeProps } from "./index";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

type Story = StoryObj<IBadgeProps>;

export const MultiEarned: Story = {
  args: {
    state: "multi",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: require("../../assets/images/badge1.png"),
  },
};

export const MultiNotEarned: Story = {
  args: {
    state: "multi",
    earned: false,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: require("../../assets/images/badge1.png"),
  },
};

export const PointsEarned: Story = {
  args: {
    state: "points",
    earned: true,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: require("../../assets/images/badge1.png"),
  },
};

export const PointsNotEarned: Story = {
  args: {
    state: "points",
    earned: false,
    title: "Liquidity Machine",
    actionsCount: 3,
    amount: 1.15,
    icon: require("../../assets/images/badge1.png"),
  },
};
