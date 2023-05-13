import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipInputWrapper from './TipInputWrapper';

export default {
  title: 'Components/TipInputWrapper',
  component: TipInputWrapper,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipInputWrapper>;

const Template: ComponentStory<typeof TipInputWrapper> = (args) => (
  <TipInputWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
