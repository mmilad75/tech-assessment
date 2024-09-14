import { Meta, StoryObj } from "@storybook/react";
import BadgeProgress, { IMetricItemProgressProps } from "./index";

export default {
  title: "Components/MetricItemProgress",
  component: BadgeProgress,
} as Meta;

type Story = StoryObj<IMetricItemProgressProps>;

export const Default: Story = {
  args: {
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
  },
};
