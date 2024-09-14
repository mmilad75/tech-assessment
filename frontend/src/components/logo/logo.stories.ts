import { Meta, StoryObj } from '@storybook/react';
import Logo, { ILogoProps } from './index';

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta;

type Story = StoryObj<ILogoProps>;

export const Default: Story = {
  args: {
    text: "Logo"
  },
};