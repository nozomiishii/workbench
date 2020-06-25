import createDataContext from './createDataContext';

interface BlogPost {
  title: string;
  id: number;
}
interface BlogContext {
  data: BlogPost[];
  addBlogPost: () => void;
}
type Action = {
  type: 'add_blogpost' | 'delete_blogpost' | 'edit_blogpost';
  payload: any;
};
const initialvalue = {
  data: [],
  addBlogPost: () => {},
};

const blogReducer = (state: BlogPost[], action: Action) => {
  switch (action.type) {
    case 'edit_blogpost':
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case 'delete_blogpost':
      return state.filter((blogpost) => blogpost.id !== action.payload);
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: string, content: string, callback?: () => void) => {
    dispatch({ type: 'add_blogpost', payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: number) => {
    dispatch({ type: 'delete_blogpost', payload: id });
  };
};

const editBlogPost = (dispatch: any) => {
  return (
    id: number,
    title: string,
    content: string,
    callback?: () => void
  ) => {
    dispatch({
      type: 'edit_blogpost',
      payload: { id, title, content },
    });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: 'test', content: 'test content', id: 1 }]
);
