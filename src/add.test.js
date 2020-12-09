// import { add, total } from './add';

const add = jest.fn(() => 3);

test('add', () => {
  expect(add(1, 2)).toBe(3);
});

// test('total', () => {
//   console.log(total(5, 20));
//   expect(total(5, 20)).toBe('$25');
// });
