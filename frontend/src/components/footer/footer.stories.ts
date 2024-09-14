import { Meta, StoryObj } from '@storybook/react';
import Footer, {IFooterProps} from './index';
import DiscordIcon from '../../assets/icons/discord.svg'
import XIcon from '../../assets/icons/x.svg'
import GithubIcon from '../../assets/icons/github.svg'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

type Story = StoryObj<IFooterProps>

export const Default: Story = {
  args: {
    socialMedia: [
      {link: "#", Icon: DiscordIcon},
      {link: "#", Icon: XIcon},
      {link: "#", Icon: GithubIcon}
    ]
  }
};