import { Meta, StoryObj } from '@storybook/react';
import SocialMedia, { ISocialMediaProps } from './index';
import GithubIcon from '../../assets/icons/github.svg'

export default {
  title: 'Components/SocialMedia',
  component: SocialMedia,
} as Meta;

type Story = StoryObj<ISocialMediaProps>;

export const Default: Story = {
  args: {
    link: "#",
    Icon: require('../../assets/icons/github.svg')
  }
};