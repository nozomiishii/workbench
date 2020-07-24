import React from 'react';
import Button from './button';

export const basicButton = () => (
  <Button variant='secondary'>Basic button</Button>
);
export const fuctionButton = () => (
  <Button onClick={() => alert('hello')}>Function Button</Button>
);
export const linkedButton = () => (
  <Button href='https://www.nozomiishii.jp/'>Linked button</Button>
);

export default {
  title: 'Button',
  component: Button,
};
