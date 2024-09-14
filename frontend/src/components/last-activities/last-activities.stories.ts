import { Meta, StoryObj } from '@storybook/react';
import LastActivities, { ILastActivitiesProps } from './index';

export default {
  title: 'Components/LastActivities',
  component: LastActivities,
} as Meta;

type Story = StoryObj<ILastActivitiesProps>;

export const Default: Story = {
  args: {
    title: "Last Activities",
    data: [
      { 
        type: "transaction",
        point: 560,
        date: "2024-09-11T00:16:08.501+00:00",
        transactionId: "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
      },
      { 
        type: "bridged",
        point: 560,
        date: "2024-09-11T00:16:08.501+00:00",
        transactionId: "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
      },
      { 
        type: "bridged",
        point: 560,
        date: "2024-09-11T00:16:08.501+00:00",
        transactionId: "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
      },
      { 
        type: "transaction",
        point: 560,
        date: "2024-09-11T00:16:08.501+00:00",
        transactionId: "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
      },
      { 
        type: "transaction",
        point: 560,
        date: "2024-09-11T00:16:08.501+00:00",
        transactionId: "0xfe7f346d0eadc61a7aed3953c610172a8d2c20704eb13990de0896acfdb10ca7",
      },
    ]
  }
}
