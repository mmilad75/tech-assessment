import { Meta, StoryObj } from '@storybook/react';
import ActivityListItem, { IActivityListItemProps } from './index';

export default {
  title: 'Components/ActivityListItem',
  component: ActivityListItem,
} as Meta;

type Story = StoryObj<IActivityListItemProps>;

export const Header: Story = {
  args: {
    type: 'header'
  },
};

export const Transaction: Story = {
  args: {
    type: 'transaction',
    point: 142,
    date: "",
    transactionId: '0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7',
    odd: true
  }
};

export const Bridged: Story = {
  args: {
    type: 'bridged',
    point: "142",
    // date: "",
    transactionId: '0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7',
    odd: false
  }
};

export const LastItem: Story = {
  args: {
    type: 'bridged',
    point: "142",
    // date: "",
    transactionId: '0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7',
    odd: true,
    lastItem: true
  }
};