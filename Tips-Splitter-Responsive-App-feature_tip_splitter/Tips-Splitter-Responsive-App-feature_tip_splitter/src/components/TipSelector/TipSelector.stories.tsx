import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipSelector from './TipSelector';

export default {
  title: 'Components/TipSelector',
  component: TipSelector,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipSelector>;

const Template: ComponentStory<typeof TipSelector> = (args) => (
  <TipSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
