import { Meta, StoryObj } from '@storybook/react';
import MetricItem, { IMetricItemProps } from './index';

export default {
  title: 'Components/MetricItem',
  component: MetricItem,
} as Meta;

type Story = StoryObj<IMetricItemProps>

export const Default: Story = {
  args: {
    actionCard: "default",
    title: "Provide at least $50 Liquidity to LINK/ETH"
  }
}

export const Complete: Story = {
  args: {
    actionCard: "complete",
    title: "Provide at least $50 Liquidity to LINK/ETH"
  }
}