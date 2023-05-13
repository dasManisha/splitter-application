import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import dollar from '../assests/dollar.svg';
import InputTextField from './InputTextField';

export default {
  title: 'Components/InputTextField',
  component: InputTextField,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof InputTextField>;

const Template: ComponentStory<typeof InputTextField> = (args) => (
  <InputTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // any args add here..
  label: ' Bill',
  error: "The amount Can't be zero",
  image: dollar,
};

export const Error = Template.bind({});
Error.args = {
  // any args add here..
  label: 'Enter Bill',
  error: "The amount can't be zero.",
};

export const WithLongLabelAndError = Template.bind({});
WithLongLabelAndError.args = {
  // any args add here..
  label: 'Enter Bill  amount here',
  error: "The amount can't be zero.Please enter proper value",
  containerStyle: { width: '50%' },
};

export const CustomInputStyled = Template.bind({});
CustomInputStyled.args = {
  // any args add here..
  label: 'Enter Bill  amount here',
  textStyle: { color: 'blue' },
  text: 'I should appear in blue',
};
