import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TipCustom from './TipCustom';

export default {
  title: 'Components/TipCustom',
  component: TipCustom,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TipCustom>;

const Template: ComponentStory<typeof TipCustom> = (args) => (
  <TipCustom {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
};
