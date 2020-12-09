export const add = (a, b) => a + b;

export const total = (shipping, subTotal) => `$${add(shipping, subTotal)}`;
