import { Meta, StoryObj } from '@storybook/react';
import CommunityBadges, { ICommunityBadgesProps } from './index';

export default {
  title: 'Components/CommunityBadges',
  component: CommunityBadges,
} as Meta;

type Story = StoryObj<ICommunityBadgesProps>;

export const Default: Story = {
  args: {
    title: "Community Badges",
    badges:[
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: false,
        title: "Liquidity Machine",
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
      {
        state: "points",
        earned: true,
        title: "Liquidity Machine",
        actionsCount: 3,
        amount: 1.15,
        icon: require('../../assets/images/badge1.png')
      },
    ]
  }
}
