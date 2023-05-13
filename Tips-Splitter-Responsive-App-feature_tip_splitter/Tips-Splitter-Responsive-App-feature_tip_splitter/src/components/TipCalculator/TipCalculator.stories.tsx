import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipCalculator from './TipCalculator';

export default {
  title: 'Components/TipCalculator',
  component: TipCalculator,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipCalculator>;

const Template: ComponentStory<typeof TipCalculator> = (args) => (
  <TipCalculator {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
