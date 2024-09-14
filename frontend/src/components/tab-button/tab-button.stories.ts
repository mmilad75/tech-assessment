import { Meta, StoryObj } from '@storybook/react';
import TabButton, { ITabButtonProps } from './index';

export default {
  title: 'Components/TabButton',
  component: TabButton,
} as Meta;

type Story = StoryObj<ITabButtonProps>;

export const Default: Story = {
  args: {
    text: "Tasks",
    link: "#",
    state: 'default'
  }
};

export const Active: Story = {
  args: {
    text: "Tasks",
    link: "#",
    state: 'active'
  }
};