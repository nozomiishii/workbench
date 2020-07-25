import React from 'react';
import Button from './button';
import { withKnobs, text, select } from '@storybook/addon-knobs';
// import { withDesign } from 'storybook-addon-designs';
import knobData from './button.knobs.json';
const { icon } = knobData;

export const basicButton = () => (
  <Button>{text('Button Text', 'Basic button')}</Button>
);
// export const basicButton = () => <Button>Button text</Button>;

export const iconButton = () => (
  <Button icon={select(icon.label, icon.options, icon.default, icon.group)}>
    Button text
  </Button>
);

export const secondaryButton = () => (
  <Button variant='secondary'>secondary button</Button>
);

export const tertiaryButton = () => (
  <Button variant='tertiary'>tertiary button</Button>
);

export const fuctionButton = () => (
  <Button onClick={() => alert('hello')}>Function Button</Button>
);
export const linkedButton = () => (
  <Button href='https://www.nozomiishii.jp/'>Linked button</Button>
);

// basicButton.story = {
//   paramaters: {
//     design: {
//       type: 'figma',
//       url:
//         'https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample',
//     },
//   },
// };

export default {
  title: 'Atoms|Button',
  decorators: [withKnobs],
  // decorators: [withDesign],
  component: Button,
};
