import { Meta, StoryObj } from '@storybook/react';
import HeaderNav, { IHeaderNavProps } from './index';

export default {
  title: 'Components/HeaderNav',
  component: HeaderNav,
} as Meta;

type Story = StoryObj<IHeaderNavProps>;

export const Default: Story = {
  args: {
    logo: {text: "Logo"},
    tabs: [
      {text: "Dashboard", link: "", state: 'active'},
      {text: "Tasks", link: ""},
      {text: "Badges", link: ""},
      {text: "Leaderboard", link: ""},
      {text: "Connections", link: ""},
    ],
    helpButton: {text: "How It Works", link: '#'},
    profileButton: {text: 'bongo.eth', image: require('../../assets/images/user.png')}
  }
}
