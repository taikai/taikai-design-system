import React from 'react';
import { Button, ButtonLink } from '../../src';
import icons from '../../src/ions/icons';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'danger',
          'info',
          'purple',
          'white',
          'dark',
          'magic',
          'pulse',
        ],
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: ['solid', 'outline', 'text'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
  },
};

export const ButtonComponent = args => <Button {...args} />;

ButtonComponent.storyName = 'Action';
ButtonComponent.args = {
  value: 'Dummie',
  variant: 'solid',
  color: 'primary',
  circle: false,
  className: 'button',
  querySelector: '.button',
  ariaLabel: 'Dummie Button',
  disabled: false,
  loading: false,
  icon: 'rocket',
};

export const ButtonLinkComponent = args => <ButtonLink {...args} />;

ButtonLinkComponent.storyName = 'Link';
ButtonLinkComponent.args = {
  ...ButtonComponent.args,
  url: 'https://github.com/taikai/taikai-design-system',
  blank: true,
};
