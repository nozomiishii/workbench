const initState = {
  projects: [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet.#1',
      content: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: '2',
      title: 'Lorem ipsum dolor sit amet.#2',
      content: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      id: '3',
      title: 'Lorem ipsum dolor sit amet.#3',
      content: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ],
};
export const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    default:
      return state;
  }
};
