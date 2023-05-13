import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipDisplay from './TipDisplay';

export default {
  title: 'Components/TipDisplay',
  component: TipDisplay,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipDisplay>;

const Template: ComponentStory<typeof TipDisplay> = (args) => (
  <TipDisplay {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
