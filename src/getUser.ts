export interface User {
  id: string;
  name: string;
}

export const getUser = (): Promise<User> => Promise.resolve({ id: '1', name: 'nozomi' });
