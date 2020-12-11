import { slugify } from '../slugify';

test('converts a string to a slug', () => {
  expect(slugify('Tab 1')).toBe('tab-1');
  expect(slugify("Amy's Tab")).toBe('amys-tab');
});
